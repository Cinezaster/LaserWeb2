function initLocalStorage() {
  var settingsOpen = document.getElementById('jsonFile');
  settingsOpen.addEventListener('change', restoreSettingsLocal, false);
}


localParams = ['spjsip', 'laserXMax', 'laserYMax', 'startgcode', 'laseron', 'laseroff', 'lasermultiply', 'homingseq', 'endgcode', 'useOffset', 'imagePosition', 'useNumPad', 'useVideo', 'useProfile'];

function saveSettingsLocal() {
    for (i = 0; i < localParams.length; i++) {
        var val = $('#' + localParams[i]).val(); // Read the value from form
        console.log('Saving: ', localParams[i], ' : ', val);
        printLog('Saving: ' + localParams[i] + ' : ' + val, successcolor);
        localStorage.setItem(localParams[i], val);
    };
};

function loadSettingsLocal() {
    for (i = 0; i < localParams.length; i++) {
        var val = localStorage.getItem(localParams[i]);
        if (val) {
            console.log('Loading: ', localParams[i], ' : ', val);
            $('#' + localParams[i]).val(val) // Set the value to Form from Storage
        };
    };
};

function backupSettingsLocal() {
  var json = JSON.stringify(localStorage)
  var blob = new Blob([json], {type: "application/json"});
    invokeSaveAsDialog(blob, 'laserweb-settings-backup.json');

}

function restoreSettingsLocal(evt) {
  console.log('Inside Restore');
   var input, file, fr;

    console.log('event ', evt)
     file = evt.target.files[0];
     fr = new FileReader();
     fr.onload = receivedText;
     fr.readAsText(file);
   }

   function receivedText(e) {
     lines = e.target.result;
     var o = JSON.parse(lines);
     for (var property in o) {
       if (o.hasOwnProperty(property)) {
           localStorage.setItem(property, o[property]);
       }
   }
   loadSettingsLocal();
   }
