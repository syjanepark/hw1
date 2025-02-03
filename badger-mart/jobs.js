function submitApplication(e) {
    e.preventDefault(); // You can ignore this; prevents the default form submission!

   const jobOptions = document.getElementsByName('job');
   let selectedJob = null;

   for (let i=0;i < jobOptions.length;i++) {
    if (jobOptions[i].checked) {
        selectedJob = jobOptions[i].value;
        break;
    }
   }

   if (selectedJob) {
    alert(`Thank you for applying to be a ${selectedJob}!`);
   }
   else {
    alert("Please selct a job!");
   }
}