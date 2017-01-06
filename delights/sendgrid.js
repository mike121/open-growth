// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// Send Emails with SendGrid
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
opengrowth.delight.sendgrid = {};
opengrowth.delight.sendgrid.email = (
    signal, message, email, name, sender_email, sender_name, reply_email, reply_name, subject, bccs
) => {

    // Record Delight Activity
    opengrowth.track.delight( 'sendgrid.email', signal, {
        email   : email
    ,   subject : subject
    ,   message : message
    ,   bccs    : bccs
    } );
    
    // sendgrid api url
    const apiurl = 'https://api.sendgrid.com/v3/mail/send';

    // sendrid api user
    const apiuser = opengrowth.keys.sendgrid.user;

    // sendgrid api key
    const apikey = opengrowth.keys.sendgrid.apikey;

    // payload
    const data = {
        mail_settings     : { bcc: { enable: true} }
    ,   from              : { email: sender_email,  name: sender_name  }
    ,   reply_to          : { email: reply_email, name: reply_name }
    ,   tracking_settings : { subscription_tracking : { enable : false } }
    ,   content           : [ { type : "text/html", value : message } ]
    ,   personalizations  : [ {
            to      : [ { email : email, name : name } ]
        ,   subject : subject
        ,   bccs    : bccs
        } ]
    };

    // post email
    return xhr.fetch( apiurl, {
        method  : 'POST'
    ,   body    : data
    ,   headers : {
        'Authorization' : `Bearer ${apikey}`
    ,   'Content-Type'  : 'application/json'
    }
    } ).catch( err => {
        //console.log( 'Error:', err );
    } );

};
