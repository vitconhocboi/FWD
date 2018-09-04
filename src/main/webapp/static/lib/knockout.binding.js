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
            $(element).datepicker('hide');
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


Date.prototype.toShortDateString = function () {
    return (this.getDate() > 9 ? this.getDate() : "0" + this.getDate())
        + "/"
        + ((this.getMonth() + 1) > 9 ? (this.getMonth() + 1) : "0" + (this.getMonth() + 1))
        + "/"
        + this.getFullYear();
};

ko.bindingHandlers.dateDate =
    {
        update: function (element, valueAccessor, allBindingsAccessor) {
            return ko.bindingHandlers.text.update(element, function () {
                var value = ko.utils.unwrapObservable(valueAccessor());
                if (value == null) {
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
        update: function (element, valueAccessor, allBindingsAccessor) {
            return ko.bindingHandlers.text.update(element, function () {
                var value = ko.utils.unwrapObservable(valueAccessor());
                if (value == null) {
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
        update: function (element, valueAccessor, allBindingsAccessor) {
            return ko.bindingHandlers.text.update(element, function () {
                var value = ko.utils.unwrapObservable(valueAccessor());
                if (value == null) {
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
        update: function (element, valueAccessor, allBindingsAccessor) {
            return ko.bindingHandlers.text.update(element, function () {
                var value = ko.utils.unwrapObservable(valueAccessor());
                if (value == null) {
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

ko.bindingHandlers.jqAuto = {
    init: function (element, valueAccessor, allBindingsAccessor, viewModel) {
        var options = valueAccessor() || {},
            allBindings = allBindingsAccessor(),
            unwrap = ko.utils.unwrapObservable,
            modelValue = allBindings.jqAutoValue,
            eventSelect = allBindings.eventSelect,
            source = allBindings.jqAutoSource || ko.observableArray(),
            query = allBindings.jqAutoQuery,
            valueProp = allBindings.jqAutoSourceValue,
            valuePropValid = allBindings.jqValidValue,
            inputValueProp = allBindings.jqAutoSourceInputValue || valueProp,
            labelProp = allBindings.jqAutoSourceLabel || inputValueProp;

        //function that is shared by both select and change event handlers
        function writeValueToModel(valueToWrite) {
            if (ko.isWriteableObservable(modelValue) || typeof modelValue == 'function') {
                modelValue(valueToWrite);
            } else {  //write to non-observable
                if (allBindings['_ko_property_writers'] && allBindings['_ko_property_writers']['jqAutoValue'])
                    allBindings['_ko_property_writers']['jqAutoValue'](valueToWrite);
            }
            if (eventSelect) {
                eventSelect(valueToWrite);
            }
        }

        //on a selection write the proper value to the model
        options.select = function (event, ui) {
            writeValueToModel(ui.item ? ui.item.actualValue : null);
        };

        //on a change, make sure that it is a valid value or clear out the model value
        options.change = function (event, ui) {
            var currentValue = $(element).val();
            var matchingItem = ko.utils.arrayFirst(unwrap(source), function (item) {
                return unwrap(inputValueProp ? item[inputValueProp] : item) === currentValue;
            });

            if (!matchingItem) {
                writeValueToModel(null);
            }
        }

        //hold the autocomplete current response
        var currentResponse = null;

        //handle the choices being updated in a DO, to decouple value updates from source (options) updates
        var mappedSource = ko.dependentObservable({
            read: function () {
                mapped = ko.utils.arrayMap(unwrap(source), function (item) {
                    var result = {};
                    result.label = labelProp ? unwrap(item[labelProp]) : unwrap(item).toString();  //show in pop-up choices
                    result.value = inputValueProp ? unwrap(item[inputValueProp]) : unwrap(item).toString();  //show in input box
                    result.actualValue = valueProp ? unwrap(item[valueProp]) : item;  //store in model
                    result.validTo = valuePropValid ? unwrap(item[valuePropValid]) : '';  //store in model
                    return result;
                });
                return mapped;
            },
            write: function (newValue) {
                source(newValue);  //update the source observableArray, so our mapped value (above) is correct
                if (currentResponse) {
                    currentResponse(mappedSource());
                }
            },
            disposeWhenNodeIsRemoved: element
        });

        if (query) {
            options.source = function (request, response) {
                currentResponse = response;
                query.call(this, request.term, mappedSource);
            }
        } else {
            //whenever the items that make up the source are updated, make sure that autocomplete knows it
            mappedSource.subscribe(function (newValue) {
                $(element).autocomplete("option", "source", newValue);
            });

            options.source = mappedSource();
        }


        //initialize autocomplete
        // $(element).autocomplete(options);
        $(element).autocomplete(options, {
            create: function () {
                $(this).data('ui-autocomplete')._renderItem = function (ul, item) {
                    return $('<li>')
                        .append('<a><b>' + item.value + '</b><br>' + item.label + (item.validTo ? ('<br> Hiệu lực: ' + moment(item.validTo).format('DD/MM/YYYY')) : '') + '</a>')
                        .appendTo(ul);
                };
            }
        });
    },
    update: function (element, valueAccessor, allBindingsAccessor, viewModel) {
        //update value based on a model change
        var allBindings = allBindingsAccessor(),
            unwrap = ko.utils.unwrapObservable,
            modelValue = unwrap(allBindings.jqAutoValue) || '',
            valueProp = allBindings.jqAutoSourceValue,
            inputValueProp = allBindings.jqAutoSourceInputValue || valueProp;

        //if we are writing a different property to the input than we are writing to the model, then locate the object
        if (valueProp && inputValueProp !== valueProp) {
            var source = unwrap(allBindings.jqAutoSource) || [];
            var modelValue = ko.utils.arrayFirst(source, function (item) {
                return unwrap(item[valueProp]) === modelValue;
            }) || {};
        }

        //update the element with the value that should be shown in the input
        $(element).val(modelValue && inputValueProp !== valueProp ? unwrap(modelValue[inputValueProp]) : modelValue.toString());
    }
};


function format(value, fixed) {
    if (value == null) return;
    fixed = fixed || 0;
    toks = value.toFixed(fixed).replace('-', '').split('.');
    var display = $.map(toks[0].split('').reverse(), function (elm, i) {
        return [(i % 3 === 0 && i > 0 ? ',' : ''), elm];
    }).reverse().join('') + (fixed > 0 ? ('.' + toks[1]) : '');

    return value < 0 ? '-' + display : display;
};

ko.subscribable.fn.numberic = function (fixed) {
    var target = this;

    var writeTarget = function (value) {
        if (ko.isWriteableObservable(target)) {
            var stripped = value != null ? value.toString()
                .replace(/[^0-9.-]/g, '') : '';
            target(parseFloat(stripped));
        }
    };

    var result = ko.computed({
        read: function () {
            return target();
        },
        write: writeTarget
    });

    result.formatted = ko.computed({
        read: function () {
            return format(target(), fixed);
        },
        write: writeTarget
    });

    result.isNegative = ko.computed(function () {
        return target() < 0;
    });

    return result;
}


ko.bindingHandlers.modal = {
    init: function (element, valueAccessor) {
        $(element).modal({
            show: false
        });

        var value = valueAccessor();
        if (ko.isObservable(value)) {
            // Update 28/02/2018
            // Thank @HeyJude for fixing a bug on
            // double "hide.bs.modal" event firing.
            // Use "hidden.bs.modal" event to avoid
            // bootstrap running internal modal.hide() twice.
            $(element).on('hidden.bs.modal', function () {
                value(false);
            });
        }

        // Update 13/07/2016
        // based on @Richard's finding,
        // don't need to destroy modal explicitly in latest bootstrap.
        // modal('destroy') doesn't exist in latest bootstrap.
        // ko.utils.domNodeDisposal.addDisposeCallback(element, function () {
        //    $(element).modal("destroy");
        // });

    },
    update: function (element, valueAccessor) {
        var value = valueAccessor();
        if (ko.utils.unwrapObservable(value)) {
            $(element).modal('show');
        } else {
            $(element).modal('hide');
        }
    }
}