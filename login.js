document.addEventListener('DOMContentLoaded', () => {
    // Get references to the HTML elements
    const step1 = document.getElementById('step1');
    const step2 = document.getElementById('step2');
    const detailsForm = document.getElementById('detailsForm');
    const otpForm = document.getElementById('otpForm');

    // Event listener for the first form (Send OTP)
    detailsForm.addEventListener('submit', (event) => {
        // Prevent the default form submission which reloads the page
        event.preventDefault(); 
        
        const name = document.getElementById('name').value;
        const mobile = document.getElementById('mobile').value;
        
        // For a real application, you would send these details to your server
        // to generate and send an actual OTP via SMS.
        console.log(`Requesting OTP for ${name} at ${mobile}`);
        alert('OTP has been sent (simulated).');

        // Hide the first step and show the second step
        step1.classList.add('hidden');
        step2.classList.remove('hidden');
    });

    // Event listener for the second form (Sign In)
    otpForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const otp = document.getElementById('otp').value;
        
        // In a real application, you would send this OTP to your server for verification.
        console.log(`Verifying OTP: ${otp}`);

        // Simulating a successful verification
        if (otp) {
            alert('Sign in successful! 🎉');
            // You could redirect the user or update the UI here.
            console.log('User has been successfully signed in.');
        } else {
            alert('Please enter the OTP.');
        }
    });
});