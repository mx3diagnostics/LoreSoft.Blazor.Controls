"use strict";

window.BlazorControls = {
    assemblyname: 'LoreSoft.Blazor.Controls',
    setFocus: function setFocus(element) {
        if (!element) return;
        element.focus();
    },
    isFocus: function isFocus(element) {
        if (!element) return false;
        return element === document.activeElement;
    },
    preventEnter: function preventEnter(element, disabled) {
        if (!element) {
            console.log("Error: preventEnter() element not found");
            return;
        }

        if (disabled)
            element.addEventListener('keydown', BlazorControls.preventEnterHandler);
        else
            element.removeEventListener('keydown', BlazorControls.preventEnterHandler);
    },
    preventEnterHandler: function preventEnterHandler(event) {
        var key = event.key;

        if (key === "Enter") {
            event.preventDefault();
        }
    }
};