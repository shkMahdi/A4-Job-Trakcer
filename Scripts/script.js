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

//All jobs
const jobList = document.getElementById('jobList');

//Main container
const mainContainer = document.querySelector('main');

// filter section
const filterSection = document.getElementById('filtered-section');

function allJobs() {
    totalJobs.innerHTML = jobList.children.length;
    totalInterview.innerHTML = interviewList.length;
    totalRejection.innerHTML = rejectionList.length;
}

function toggleStyle(id) {
    tabAll.classList.remove('btn-primary');
    tabInterview.classList.remove('btn-primary');
    tabRejected.classList.remove('btn-primary');

    tabAll.classList.add('btn-soft');
    tabInterview.classList.add('btn-soft');
    tabRejected.classList.add('btn-soft');

    const selected = document.getElementById(id);

    selected.classList.add('btn-primary');
    selected.classList.remove('btn-soft');


    if (id === 'tabInterview') {
        jobList.classList.add('hidden');
        filterSection.classList.remove('hidden');
        if (interviewList.length === 0) {
            renderNoJob();
        }
        else renderInterview();
        currentTab = 'tabInterview';
    }
    else if (id === 'tabRejected') {
        jobList.classList.add('hidden');
        filterSection.classList.remove('hidden');
        if (rejectionList.length === 0) {
            renderNoJob();
        }
        else renderRejected();
        currentTab = 'tabRejected';
    }
    else if (id === 'tabAll') {
        jobList.classList.remove('hidden');
        filterSection.classList.add('hidden');
        currentTab = 'tabAll';
        if (jobList.children.length === 0) {
            renderNoJob();
        }
    }
}
allJobs();


mainContainer.addEventListener('click', function (event) {
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

        if (!interviewGiven) interviewList.push(jobObject);

        rejectionList = rejectionList.filter(item => item.company != jobObject.company);

        if (currentTab === 'tabRejected') {

            if (rejectionList.length === 0) {
                renderNoJob();
            }
            else renderRejected();
        }

        allJobs();
    }
    else if (event.target.classList.contains('rejected-btn')) {
        const card = event.target.parentNode.parentNode;
        // console.log(card);

        const statusBtn = card.querySelector('.status-btn');
        statusBtn.textContent = 'REJECTED';
        statusBtn.className = 'status-btn btn btn-sm btn-outline btn-error rounded-md';

        const jobObject = {
            company: card.querySelector('h3').textContent,
            position: card.querySelector('p').textContent,
            location: card.querySelectorAll('span')[0].textContent,
            type: card.querySelectorAll('span')[2].textContent,
            salary: card.querySelectorAll('span')[4].textContent,
            status: 'Rejected'
        };

        const gotRejected = rejectionList.find(item => item.company === jobObject.company);

        if (!gotRejected) rejectionList.push(jobObject);

        interviewList = interviewList.filter(item => item.company != jobObject.company);

        if (currentTab === 'tabInterview') {

            if (interviewList.length === 0) {
                renderNoJob();
            }
            else renderInterview();
        }

        allJobs();
    }
})


function renderInterview() {
    filterSection.innerHTML = '';

    for (let interview of interviewList) {
        let div = document.createElement('div');
        div.className = 'bg-white rounded-xl p-6 shadow-sm border border-gray-100';
        div.innerHTML = `
            <div class="flex items-start justify-between mb-1">
                <div>
                    <h3 class="font-bold text-[#002C5C]">${interview.company}</h3>
                    <p class="text-sm text-gray-400">${interview.position}</p>
                </div>
                <button class="text-gray-300 hover:text-red-400 transition cursor-pointer">
                    <i class="fa-regular fa-trash-can"></i>
                </button>
            </div>

            <div class="flex gap-2 text-xs text-gray-400 mt-3 mb-4">
                <span>${interview.location}</span>
                <span>•</span>
                <span>${interview.type}</span>
                <span>•</span>
                <span>${interview.salary}</span>
            </div>

            <button class="status-btn btn btn-sm btn-outline btn-success rounded-md text-xs px-4">
                ${interview.status.toUpperCase()}
            </button>

            <p class="text-sm text-gray-500 my-3">
                Build cross-platform mobile applications using React Native.
            </p>

            <div class="flex gap-2">
                <button class="intterview-btn btn btn-sm btn-outline btn-success rounded-md text-xs px-4">
                    INTERVIEW
                </button>
                <button class="rejected-btn btn btn-sm btn-outline btn-error rounded-md text-xs px-4">
                    REJECTED
                </button>
            </div>
        `;
        filterSection.appendChild(div);
    }
}

function renderRejected() {
    filterSection.innerHTML = '';

    for (let rejected of rejectionList) {
        let div = document.createElement('div');
        div.className = 'bg-white rounded-xl p-6 shadow-sm border border-gray-100';
        div.innerHTML = `
            <div class="flex items-start justify-between mb-1">
                <div>
                    <h3 class="font-bold text-[#002C5C]">${rejected.company}</h3>
                    <p class="text-sm text-gray-400">${rejected.position}</p>
                </div>
                <button class="text-gray-300 hover:text-red-400 transition cursor-pointer">
                    <i class="fa-regular fa-trash-can"></i>
                </button>
            </div>

            <div class="flex gap-2 text-xs text-gray-400 mt-3 mb-4">
                <span>${rejected.location}</span>
                <span>•</span>
                <span>${rejected.type}</span>
                <span>•</span>
                <span>${rejected.salary}</span>
            </div>

            <button class="status-btn btn btn btn-sm btn-outline btn-error rounded-md text-xs px-4">
                ${rejected.status.toUpperCase()}
            </button>

            <p class="text-sm text-gray-500 my-3">
                Build cross-platform mobile applications using React Native.
            </p>

            <div class="flex gap-2">
                <button class="intterview-btn btn btn-sm btn-outline btn-success rounded-md text-xs px-4">
                    INTERVIEW
                </button>
                <button class="rejected-btn btn btn-sm btn-outline btn-error rounded-md text-xs px-4">
                    REJECTED
                </button>
            </div>
        `;
        filterSection.appendChild(div);
    }
}


function renderNoJob() {
    filterSection.innerHTML = '';
    const div = document.createElement('div');
    div.className = 'bg-white rounded-xl py-[111px] shadow-sm border border-gray-100 text-center items-center flex flex-col gap-2.5'
    div.innerHTML = `
        <div class="max-w-[100px]">
            <img src="./Images/jobs.png" alt="">
        </div>
        <div>
            <h3 class="font-semibold text-2xl text-[#002C5C]">No jobs available</h3>
            <p class="text-sm text-gray-400">Check back soon for new job opportunities</p>
        </div>
    `;
    filterSection.appendChild(div);
}