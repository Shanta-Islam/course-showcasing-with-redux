const getStoredCourseItem = ()=>{
    const storedDonationItem = localStorage.getItem('enroll-courses');
    if(storedDonationItem){
        return JSON.parse(storedDonationItem); 

    }
    return [];
}

const saveCourseItem = id =>{
    const storedDonationItems = getStoredCourseItem();
    const exists = storedDonationItems.find(donationId=> donationId == id);
    if(!exists){
        storedDonationItems.push(id);
        localStorage.setItem('enroll-courses', JSON.stringify(storedDonationItems))
    }
}
export {getStoredCourseItem, saveCourseItem};   