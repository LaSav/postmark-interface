function getSubscribers() {
  axios
    .get('http://localhost:3000/api/subscribers/', {
      timeOut: 5000,
    })
    .then((res) => showSubscribers(res))
    .catch((err) => console.log(err));
}

function getBroadcasts() {
  axios
    .get('http://localhost:3000/api/broadcast/', {
      timeOut: 5000,
    })
    .then((res) => showBroadcasts(res))
    .catch((err) => console.log(err));
}

// function getEmails() {
//   axios
//     .get('http://localhost:3000/api/subscribers/', {
//       timeOut: 5000,
//     })
//     .then((res) => sendBroadcast(res))
//     .catch((err) => console.log(err));
// }

// function sendBroadcast(res) {
//   const subscribers = res.data;
//   // console.log(subscribers);
//   const emails = subscribers.map((subscriber) => subscriber.email);
//   console.log('emails:', emails);
//   axios
//     .post('http://localhost:3000/api/broadcast', { email: emails[0] })
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err));
// }

// async function sendBroadcast() {
//   // get subscribers response
//   try {
//     const response1 = await axios.get(
//       'http://localhost:3000/api/subscribers/',
//       {
//         timeOut: 5000,
//       }
//     );
//     // get email from subscribers response
//     const subscribers = response1.data;
//     console.log(subscribers);
//     const emails = subscribers.map((subscriber) => subscriber.email);
//     const templateNumber = document.getElementById('template-number').value;
//     console.log(templateNumber);
//     console.log(emails);
//     const emailsToString = emails.join(',');
//     console.log('emails as a string:', emailsToString);
//     // post email
//     const response2 = await axios.post('http://localhost:3000/api/broadcast', {
//       email: emails[0],
//       templateNumber: templateNumber,
//     });
//     console.log('response2', response2);
//     console.log('message:', response2.data.message);
//     document.getElementById('res').innerHTML = `
//     <div class="col-5 mt-4 mx-auto" style="color: blue">
//         <p>Status: ${response2.data.message}</p>
//       </div>
//     `;
//     document.getElementById('broadcast').disabled = true;
//     document
//       .getElementById('broadcast')
//       .removeEventListener('click', sendBroadcast);
//     document.getElementById('err').innerHTML = '';
//   } catch (error) {
//     console.error(error);
//     showError(error);
//   }
// }

function showSubscribers(res) {
  const subscribers = res.data;
  // console.log(subscribers);
  // const emails = subscribers.map((subscriber) => subscriber.email);
  // console.log('emails:', emails);
  let placeholder = document.getElementById('data-output');
  let out = '';
  for (subscriber of subscribers) {
    out += `
    <tr>
    <td>${subscriber._id}</td>
    <td>${subscriber.name}</td>
    <td>${subscriber.email}</td>
    <td>${subscriber.subscribed}</td>
    </tr>
    `;
  }
  placeholder.innerHTML = out;
}

function showBroadcasts(res) {
  const broadcasts = res.data;
  // console.log(broadcasts);
  // const emails = broadcasts.map((broadcast) => broadcast.email);
  // console.log('emails:', emails);
  let placeholder = document.getElementById('data-output2');
  let out = '';
  for (broadcast of broadcasts) {
    out += `
    <tr>
    <td>${broadcast._id}</td>
    <td>${broadcast.createdAt}</td>
    </tr>
    `;
  }
  placeholder.innerHTML = out;
}

function sendPreview() {
  const templateNumber = document.getElementById('template-number').value;
  axios
    .post('http://localhost:3000/api/broadcast', {
      email: 'service@boundnetwork.com',
      templateNumber: templateNumber,
    })
    .then(
      (res) =>
        (document.getElementById('res').innerHTML = `
    <div class="col-5 mt-4 mx-auto" style="color: orange">
        <p>Status: ${(res.data.message = 'preview successfully sent')}</p>
      </div>
    `)
    )
    .catch((err) => showError(err));
  // document.getElementById('preview').disabled = true;
  // document.getElementById('preview').removeEventListener('click', sendPreview);
  document.getElementById('err').innerHTML = '';
}
async function sendBroadcast() {
  try {
    const templateNumber = document.getElementById('template-number').value;
    const response = await axios.post('http://localhost:3000/api/broadcast', {
      templateNumber: templateNumber,
    });
    document.getElementById('res').innerHTML = `
     <div class="col-5 mt-4 mx-auto" style="color: blue">
         <p>Status: ${response.data.message}</p>
       </div>
    `;
    document.getElementById('broadcast').disabled = true;
    document
      .getElementById('broadcast')
      .removeEventListener('click', sendBroadcast);
    document.getElementById('err').innerHTML = '';
  } catch (error) {
    console.error(error);
    showError(error);
  }
}

function showError(err) {
  document.getElementById(
    'err'
  ).innerHTML = `<div class="col-5 mt-4 mx-auto" style="color: red">
  <p>Status: ${err.response.data.message}</p>
</div>`;
}

getSubscribers();
getBroadcasts();

document.getElementById('broadcast').addEventListener('click', sendBroadcast);
document.getElementById('preview').addEventListener('click', sendPreview);
