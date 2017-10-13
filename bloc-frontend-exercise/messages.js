var data = [{	student_name: 'Sanny Lin',
				profile_photo: 'https://github.com/Bloc/bloc-frontend-exercise/blob/master/assets/images/0.jpg?raw=true',
				subject: 'Frontend Foundation 6 - HTML & CSS: Basic Structure discussion',
				message: 'Ah... so it all depends on what the method is returning. And I realized that join() doesn\'t change the array, I would need to save it as a string.',
				age: '12 Oct'
			},
			{	student_name: 'Joey Kirk',
				profile_photo: 'https://github.com/Bloc/bloc-frontend-exercise/blob/master/assets/images/1.jpg?raw=true',
				subject: 'true and false in JavaScript',
				message: 'Here\'s a good article covering truthy and falsey values in JavaScript',
				age: '5d'
			},
			{	student_name: 'Sanny Lin',
				profile_photo: 'https://github.com/Bloc/bloc-frontend-exercise/blob/master/assets/images/0.jpg?raw=true',
				subject: 'Frontend Foundation 4 - GitHub',
				message: 'Updated Submission',
				age: '3d'
			},
			{
				student_name: 'Courtland Alves',
				profile_photo: 'https://github.com/Bloc/bloc-frontend-exercise/blob/master/assets/images/2.jpg?raw=true',
				subject: 'Introducing myself',
				message: 'Hi mentor! I just enrolled in Bloc. I can\'t wait to start learning design and frontend.',
				age: '2h'
			}];

function fillData() {
  if(data.length > 0) {
  $('.no-messages').hide();
    
    data.forEach((item,index) => {
      let message = `
<div id="message${index}" class="message">
    <div class="message-content">
        <div style="background: url(${item.profile_photo}) center" class="image">
      </div>
      
        <div class="name">
        ${item.student_name.split(" ")[0]}<br>${item.student_name.split(" ")[1]}
      </div>
      
      <div class="message-text">
        <span class="subject">
          ${item.subject}
        </span><br>
        <span class="text">
          ${item.message.substring(0,98)}
        </span>
      </div>
 <div class="time">
   <span id="time">${item.age}</span>
 </div>
    </div>
    <div class="delete">
      <i onclick="deleteMessage(${index})" class="fa fa-times" aria-hidden="true"></i>
    </div>
  </div>
`;
  $('.container').append(message);
  setTimeout(() => {
    $('.message').eq(index).fadeIn();
  }, index * 500);
  });
} else {
  $('.no-messages').slideIn('slow');
}
  $('#messageCount').text(data.length);
}

fillData();

function deleteMessage(index) {
 
  $('#message' + index).fadeOut();
  $('#messageCount').text($('#messageCount').text() -1);
  if($('#messageCount').text() == 0) {
    $('.no-messages').show();
  }

  
}

function deleteAll() {
  for(let i =0;i<$('.message').length;i++){
    
    setTimeout(() => {
      deleteMessage(i);
    },500*i);
  }
}

function hide(element) {
  $(element).stop().animate({
    height: 0,
    padding: 0,
    margin: 0
  },600, function() {
    $(this).hide();
  });
}
