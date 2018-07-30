/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function PagingVM(options) {
    var self = this;

    self.pageSize = ko.observable(options.pageSize);
    self.currentPage = ko.observable(1);
    self.totalCount = ko.observable(options.totalCount);

    self.pageCount = ko.pureComputed(function () {
        return Math.ceil(self.totalCount() / self.pageSize());
    });

    self.setCurrentPage = function (page) {
        if (page < self.firstPage)
            page = self.firstPage;

        if (page > self.lastPage())
            page = self.lastPage();

        self.currentPage(page);
    };

    self.firstPage = 1;
    self.lastPage = ko.pureComputed(function () {
        return self.pageCount();
    });

    self.nextPage = ko.pureComputed(function () {
        var next = self.currentPage() + 1;
        if (next > self.lastPage())
            return null;
        return next;
    });

    self.previousPage = ko.pureComputed(function () {
        var previous = self.currentPage() - 1;
        if (previous < self.firstPage)
            return null;
        return previous;
    });

    self.needPaging = ko.pureComputed(function () {
        return self.pageCount() > 1;
    });

    self.nextPageActive = ko.pureComputed(function () {
        return self.nextPage() != null;
    });

    self.previousPageActive = ko.pureComputed(function () {
        return self.previousPage() != null;
    });

    self.lastPageActive = ko.pureComputed(function () {
        return (self.lastPage() != self.currentPage());
    });

    self.firstPageActive = ko.pureComputed(function () {
        return (self.firstPage != self.currentPage());
    });

    self.generateAllPages = function () {
        var pages = [];
        for (var i = self.firstPage; i <= self.lastPage(); i++)
            pages.push(i);

        return pages;
    };

    self.generateMaxPage = function () {
        var current = self.currentPage();
        var pageCount = self.pageCount();
        var first = self.firstPage;

        var upperLimit = current + parseInt((self.pageSize() - 1) / 2);
        var downLimit = current - parseInt((self.pageSize()- 1) / 2);

        while (upperLimit > pageCount) {
            upperLimit--;
            if (downLimit > first)
                downLimit--;
        }

        while (downLimit < first) {
            downLimit++;
            if (upperLimit < pageCount)
                upperLimit++;
        }

        var pages = [];
        for (var i = downLimit; i <= upperLimit; i++) {
            pages.push(i);
        }
        return pages;
    };

    self.getPages = ko.pureComputed(function () {
        self.currentPage();
        self.totalCount();
        
        if (self.pageCount() <= self.pageSize()) {
            return ko.observableArray(self.generateAllPages());
        } else {
            return ko.observableArray(self.generateMaxPage());
        }
    });

   

    self.goToPage = function (page) {
        if (page >= self.firstPage && page <= self.lastPage())
            self.setCurrentPage(page);
    };

    self.goToFirst = function () {
        self.pagingVM.setCurrentPage(self.pagingVM.firstPage);
        alert(self.pagingVM.currentPage());
    };

    self.goToPrevious = function () {
        var previous = self.previousPage();
        if (previous != null)
            self.setCurrentPage(previous);
    };

    self.goToNext = function () {
        var next = self.nextPage();
        if (next != null)
            self.setCurrentPage(next);
    };

    self.goToLast = function () {
        self.setCurrentPage(self.lastPage());
    };
};

