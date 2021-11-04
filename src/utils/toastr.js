import * as toastr from 'toastr';

const BASE_OPTIONS = {
    "closeButton":       true,
    "debug":             false,
    "newestOnTop":       true,
    "progressBar":       true,
    "positionClass":     "toast-top-right",
    "preventDuplicates": true,
    "onclick":           null,
    "showDuration":      "300",
    "hideDuration":      "1000",
    "timeOut":           "5000",
    "extendedTimeOut":   "1000",
    "showEasing":        "swing",
    "hideEasing":        "linear",
    "showMethod":        "fadeIn",
    "hideMethod":        "fadeOut"
};

toastr.options = JSON.parse(JSON.stringify(BASE_OPTIONS));

const toastrOverrideOptions = (type, label, newOptions) => {
    const newOptionsKeys = Object.keys(newOptions);
    for (let i = 0; i < newOptionsKeys.length; i++) {
        toastr.options[newOptionsKeys[i]] = newOptions[newOptionsKeys[i]];
    }

    toastr[type](label);

    toastr.options = JSON.parse(JSON.stringify(BASE_OPTIONS));
};

export {toastr, toastrOverrideOptions};
