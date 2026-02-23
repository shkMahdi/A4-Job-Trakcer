let interviewList = [];
let rejectionList = [];

const totalJobs = document.getElementById('totalJobs'); 
const totalInterview = document.getElementById('totalInterview');
const totalRejection = document.getElementById('totalRejection');

// Tab buttons
const tabAll = document.getElementById('tabAll');
const tabInterview = document.getElementById('tabInterview');
const tabRejected = document.getElementById('tabRejected');

const jobList = document.getElementById('jobList');

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