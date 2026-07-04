function updateClock() {
    const now = new Date();
    let hours = String(now.getHours()).padStart(2, '0');
    let minutes = String(now.getMinutes()).padStart(2, '0');
    let seconds = String(now.getSeconds()).padStart(2, '0');
    
    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
}

// ഓരോ സെക്കൻഡിലും ക്ലോക്ക് അപ്ഡേറ്റ് ചെയ്യും
setInterval(updateClock, 1000);

// പേജ് ലോഡ് ചെയ്യുമ്പോൾ തന്നെ ക്ലോക്ക് കാണിക്കാൻ
updateClock();