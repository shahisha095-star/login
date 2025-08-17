# login html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome Login</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <div class="login-container">
        
        <div id="step1">
            <h1>Welcome</h1>
            <p>Please enter your details to login.</p>
            <form id="detailsForm">
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" id="name" name="name" placeholder="khushi" required>
                </div>
                <div class="form-group">
                    <label for="mobile">Mobile Number</label>
                    <input type="tel" id="mobile" name="mobile" placeholder="1234567890" pattern="[0-9]{10}" required>
                </div>
                <button type="submit">Send OTP</button>
            </form>
        </div>

        <div id="step2" class="hidden">
            <h1>Welcome</h1>
            <p>An OTP has been sent to your mobile.</p>
            <form id="otpForm">
                <div class="form-group">
                    <label for="otp">OTP</label>
                    <input type="text" id="otp" name="otp" placeholder="123456" pattern="[0-9]{6}" required>
                </div>
                <button type="submit">Sign In</button>
            </form>
        </div>
    </div>

    <script src="script.js"></script>

</body>
</html>
