window.BlazorControls = {
    assemblyname: 'LoreSoft.Blazor.Controls',
    setFocus: (element) => {
        if (!element)
            return;

        element.focus();
    },
    isFocus: (element) => {
        if(!element)
            return false;
        
        return element === document.activeElement;
    },
    preventEnter: (element, disabled) => {
        if (!element) {
            console.log("Error: preventEnter() element not found");
            return;
        }

        if (disabled)
            element.addEventListener('keydown', BlazorControls.preventEnterHandler);
        else
            element.removeEventListener('keydown', BlazorControls.preventEnterHandler);
    },
    preventEnterHandler: (event) => {
        const key = event.key;

        if (key === "Enter") {
            event.preventDefault();
        }
    }

};
