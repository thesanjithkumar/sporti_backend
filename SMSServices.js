const axios = require('axios');
const crypto = require('crypto');

class SMSServices {
    sendSingleSMS(username, password, message, senderId, mobileNumber, secureKey, templateid) {
        const encryptedPassword = this.MD5(password);
        const generatedHashKey = this.hashGenerator(username, senderId, message, secureKey);

        const data = new URLSearchParams();
        data.append('mobileno', mobileNumber);
        data.append('senderid', senderId);
        data.append('content', message);
        data.append('smsservicetype', 'singlemsg');
        data.append('username', username);
        data.append('password', encryptedPassword);
        data.append('key', generatedHashKey);
        data.append('templateid', templateid);

        axios.post('http://smsmobile1.karnataka.gov.in/index.php/sendmsg', data)
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error('Error sending single SMS:', error);
            });
    }

    // Define other methods (sendBulkSMS, sendUnicodeSMS, sendOtpSMS, sendUnicodeOtpSMS, hashGenerator, MD5) here...

    hashGenerator(username, senderId, content, secureKey) {
        const hashString = `${username.trim()}${senderId.trim()}${content.trim()}${secureKey.trim()}`;
        const hash = crypto.createHash('sha512');
        hash.update(hashString);
        return hash.digest('hex');
    }

    MD5(text) {
        const hash = crypto.createHash('md5');
        hash.update(text);
        return hash.digest('hex');
    }
}

// Example usage:
const smsServices = new SMSServices();
const username = 'your_username';
const password = 'your_password';
const message = 'Hello from SMSServices!';
const senderId = 'your_sender_id';
const mobileNumber = '9999999999';
const secureKey = 'your_secure_key';
const templateid = 'your_template_id'; // Use the same template ID for all message types

smsServices.sendSingleSMS(username, password, message, senderId, mobileNumber, secureKey, templateid);
