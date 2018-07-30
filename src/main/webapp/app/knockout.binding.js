/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
ko.bindingHandlers.executeOnEnter = {
    init: function (element, valueAccessor, allBindings, viewModel) {
        var callback = valueAccessor();
        $(element).keypress(function (event) {
            var keyCode = (event.which ? event.which : event.keyCode);
            if (keyCode === 13) {
                callback.call(viewModel);
                return false;
            }
            return true;
        });
    }
};

ko.bindingHandlers.autoComplete = {
    // Only using init event because the Jquery.UI.AutoComplete widget will take care of the update callbacks
    init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
        // { selected: mySelectedOptionObservable, options: myArrayOfLabelValuePairs }
        var settings = valueAccessor();

        var selectedOption = settings.selected;
        var options = settings.options;

        var updateElementValueWithLabel = function (event, ui) {
            // Stop the default behavior
            event.preventDefault();

            // Update the value of the html element with the label 
            // of the activated option in the list (ui.item)
            $(element).val(ui.item.label);

            // Update our SelectedOption observable
            if (typeof ui.item !== "undefined") {
                // ui.item - label|value|...
                selectedOption(ui.item);
            }
        };

        $(element).autocomplete({
            source: options,
            select: function (event, ui) {
                updateElementValueWithLabel(event, ui);
            },
            focus: function (event, ui) {
                updateElementValueWithLabel(event, ui);
            },
            change: function (event, ui) {
                updateElementValueWithLabel(event, ui);
            }
        });
    }
};

ko.bindingHandlers.safeText = {
    update: function (element, valueAccessor, allBindingsAccessor) {
        var options = ko.utils.unwrapObservable(valueAccessor()),
                value = ko.utils.unwrapObservable(options.value),
                property = ko.utils.unwrapObservable(options.property),
                fallback = ko.utils.unwrapObservable(options.default) || "",
                text;

        text = value ? (options.property ? value[property] : value) : fallback;
        ko.bindingHandlers.text.update(element, function () {
            return text;
        });
    }
};

ko.bindingHandlers.selectedText = {
    init: function (element, valueAccessor) {
        var value = valueAccessor();
        $(element).change(function () {
            var $option = $("option:selected", this);
            if ($option && $option.val()) {
                value($option.text());
            } else {
                value(null);
            }
        });
        var $selected = $(element).find(":selected");
        if ($selected.val()) {
            value($selected.text());
        }
    }
};
ko.bindingHandlers.datepicker = {
    init: function (element, valueAccessor, allBindingsAccessor) {
        var options = allBindingsAccessor().datepickerOptions || {};
        $(element).datepicker(options);
        ko.utils.registerEventHandler(element, "change", function () {
            var observable = valueAccessor();
            observable($(element).datepicker("getDate"));
        });
        ko.utils.domNodeDisposal.addDisposeCallback(element, function () {
            $(element).datepicker("destroy");
        });
    },
    update: function (element, valueAccessor) {
        var value = ko.unwrap(valueAccessor());
        if (value === null) {
            $(element).val('');
        } else {
            $(element).datepicker('setDate', value);
        }
    }
};

Date.prototype.toShortDateString = function ()
{
    return (this.getDate() > 9 ? this.getDate() : "0" + this.getDate())
            + "/"
            + ((this.getMonth() + 1) > 9 ? (this.getMonth() + 1) : "0" + (this.getMonth() + 1))
            + "/"
            + this.getFullYear();
};

ko.bindingHandlers.dateDate =
        {
            update: function (element, valueAccessor, allBindingsAccessor)
            {
                return ko.bindingHandlers.text.update(element, function ()
                {
                    var value = ko.utils.unwrapObservable(valueAccessor());
                    if (value == null)
                    {
                        return null;
                    }
//            console.log("value -> ", value);
                    //if (typeof value === "string")
                    //{
                    value = new Date(value);
                    //}
                    return value.getDate();
                }, allBindingsAccessor, null, null);
            }
        };

ko.bindingHandlers.dateMonth =
        {
            update: function (element, valueAccessor, allBindingsAccessor)
            {
                return ko.bindingHandlers.text.update(element, function ()
                {
                    var value = ko.utils.unwrapObservable(valueAccessor());
                    if (value == null)
                    {
                        return null;
                    }
//            console.log("value -> ", value);
                    //if (typeof value === "string")
                    //{
                    value = new Date(value);
                    //}
                    return 1 + value.getMonth();
                }, allBindingsAccessor, null, null);
            }
        };

ko.bindingHandlers.dateYear =
        {
            update: function (element, valueAccessor, allBindingsAccessor)
            {
                return ko.bindingHandlers.text.update(element, function ()
                {
                    var value = ko.utils.unwrapObservable(valueAccessor());
                    if (value == null)
                    {
                        return null;
                    }
//            console.log("value -> ", value);
                    //if (typeof value === "string")
                    //{
                    value = new Date(value);
                    //}
                    return 1900 + value.getYear();
                }, allBindingsAccessor, null, null);
            }
        };

ko.bindingHandlers.date =
        {
            update: function (element, valueAccessor, allBindingsAccessor)
            {
                return ko.bindingHandlers.text.update(element, function ()
                {
                    var value = ko.utils.unwrapObservable(valueAccessor());
                    if (value == null)
                    {
                        return null;
                    }
//            console.log("value -> ", value);
                    //if (typeof value === "string")
                    //{
                    value = new Date(value);
                    //}
                    return value.toShortDateString();
                }, allBindingsAccessor, null, null);
            }
        };

ko.bindingHandlers.datalist = (function () {
    function getVal(rawItem, prop) {
        var item = ko.unwrap(rawItem);
        return item && prop ? ko.unwrap(item[prop]) : item;
    }

    function findItem(options, prop, ref) {
        return ko.utils.arrayFirst(options, function (item) {
            return ref === getVal(item, prop);
        });
    }
    return {
        init: function (element, valueAccessor, allBindingsAccessor) {
            var setup = valueAccessor(),
                    textProperty = ko.unwrap(setup.optionsText),
                    valueProperty = ko.unwrap(setup.optionsValue),
                    dataItems = ko.unwrap(setup.options),
                    myValue = setup.value,
                    koValue = allBindingsAccessor().value,
                    datalist = document.createElement("DATALIST");

            // create an associated <datalist> element
            datalist.id = element.getAttribute("list");
            document.body.appendChild(datalist);

            // when the value is changed, write to the associated myValue observable
            function onNewValue(newVal) {
                var dataItems = ko.unwrap(setup.options),
                        selectedItem = findItem(dataItems, textProperty, newVal),
                        newValue = selectedItem ? getVal(selectedItem, valueProperty) : void 0;

                if (ko.isWriteableObservable(myValue)) {
                    myValue(newValue);
                }
            }

            // listen for value changes
            // - either via KO's value binding (preferred) or the change event
            if (ko.isSubscribable(koValue)) {
                koValue.subscribe(onNewValue);
            } else {
                ko.utils.registerEventHandler(element, "change", function () {
                    onNewValue(this.value);
                });
            }

            // init the element's value
            // - either via the myValue observable (preferred) or KO's value binding
            if (ko.isObservable(myValue) && myValue()) {
                element.value = getVal(findItem(dataItems, valueProperty, myValue()), textProperty);
            } else if (ko.isObservable(koValue) && koValue()) {
                onNewValue(koValue());
            }
        },
        update: function (element, valueAccessor) {
            var setup = valueAccessor(),
                    datalist = element.list,
                    dataItems = ko.unwrap(setup.options),
                    textProperty = ko.unwrap(setup.optionsText);

            // rebuild list of options when an underlying observable changes
            datalist.innerHTML = "";
            ko.utils.arrayForEach(dataItems, function (item) {
                var option = document.createElement("OPTION");
                option.value = getVal(item, textProperty);
                datalist.appendChild(option);
            });
            ko.utils.triggerEvent(element, "change");
        }
    };
})();