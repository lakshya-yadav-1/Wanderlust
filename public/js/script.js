(() => {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();


// file size 


document.getElementById('image').addEventListener('change', function(e) {
    const file = e.target.files[0];
    const errorDiv = document.getElementById('fileSizeError');
    const submitBtn = document.querySelector('button[type="submit"]');
    
    if (file) {
        const fileSize = file.size / 1024 / 1024; // Convert to MB
        
       if (fileSize > 3) {
         errorDiv.style.display = "block";
         errorDiv.textContent = `File size is ${fileSize.toFixed(
           1
         )}MB. Please select a file smaller than 3MB.`;
         submitBtn.disabled = true;
         e.target.value = "";
       } else {
         errorDiv.style.display = "none";
         submitBtn.disabled = false;
       }
    }
});

