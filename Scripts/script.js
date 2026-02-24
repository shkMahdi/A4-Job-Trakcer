let interviewList = [];
let rejectionList = [];
let currentTab = 'tabAll';

const totalJobs = document.getElementById('totalJobs'); 
const totalInterview = document.getElementById('totalInterview');
const totalRejection = document.getElementById('totalRejection');

// Tab buttons
const tabAll = document.getElementById('tabAll');
const tabInterview = document.getElementById('tabInterview');
const tabRejected = document.getElementById('tabRejected');

const jobList = document.getElementById('jobList');

//Main container
const mainContainer = document.querySelector('main');

function allJobs(){
    totalJobs.innerHTML = jobList.children.length;
    totalInterview.innerHTML = interviewList.length;
    totalRejection.innerHTML = rejectionList.length;
}

function toggleStyle(id){
    tabAll.classList.remove('btn-primary');
    tabInterview.classList.remove('btn-primary');
    tabRejected.classList.remove('btn-primary');

    tabAll.classList.add('btn-soft');
    tabInterview.classList.add('btn-soft');
    tabRejected.classList.add('btn-soft');

    const selected = document.getElementById(id);

    selected.classList.add('btn-primary');
    selected.classList.remove('btn-soft');
}
allJobs();


mainContainer.addEventListener('click', function(event){
    if (event.target.classList.contains('intterview-btn')) {
        const card = event.target.parentNode.parentNode;
        // console.log(card);

        const statusBtn = card.querySelector('.status-btn');
        statusBtn.textContent = 'INTERVIEW';
        statusBtn.className = 'status-btn btn btn-sm btn-outline btn-success rounded-md';

        const jobObject = {
            company: card.querySelector('h3').textContent,
            position: card.querySelector('p').textContent,
            location: card.querySelectorAll('span')[0].textContent,
            type: card.querySelectorAll('span')[2].textContent,
            salary: card.querySelectorAll('span')[4].textContent,
            status: 'Interview'
        };

        const interviewGiven = interviewList.find(item => item.company === jobObject.company);

        if(!interviewGiven) interviewList.push(jobObject);

        rejectionList = rejectionList.find(item => item.company != jobObject.company);
        
        // console.log(interviewList);

        if(currentTab === 'tabRejected') {
            renderRejected();
            //create the render function after coming home
        }
    }
})