

const developerInitialValues = {jobTitle: '', yearsOfExperience: '', skills: ''}
const clientInitialValues = {oranizationName: '', yearsOfExperience: '' , skillsNeeded: ''}

const developerFields = [
{name:'jobTitle', label: 'Job Title', previusElement: 'year'},
{name:'yearsOfExperience', label: 'Years Of Experience', previusElement: 'jobTitle'}, 
{name:'skills', label: 'Skills',  previusElement: 'yearsOfExperience'},
 ]

 const clientFields = [
  {name:'oranizationName', label: 'Organization Name', previusElement: 'year'},
  {name:'yearsOfExperience', label: 'Years Of Experience', previusElement: 'oranizationName'}, 
  {name:'skillsNeeded', label: 'Skills Needed', previusElement: 'yearsOfExperience'},
 ]


 const initialValues = {email: '', firstName: '', lastName : '', password: '', confirmPassword: '',
 address: '', gender: '', phoneNumber: '', day: '', month: '', year: ''};

 export {developerInitialValues, developerFields, clientFields, clientInitialValues, initialValues }
