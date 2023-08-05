

const developerInitialValues = {jobTitle: '', yearsOfExperience: '', skills: ''}
const clientInitialValues = {oranizationName: '', yearsOfExperience: '' , skillsNeeded: ''}

const developerFields = [
{name:'jobTitle', label: 'Job Title'},
{name:'yearsOfExperience', label: 'Years Of Experience'}, 
{name:'skills', label: 'Skills'},
 ]

 const clientFields = [
  {name:'oranizationName', label: 'Organization Name'},
  {name:'yearsOfExperience', label: 'Years Of Experience'}, 
  {name:'skillsNeeded', label: 'Skills Needed'},
 ]


 const initialValues = {email: '', firstName: '', lastName : '', password: '', confirmPassword: '',
 address: '', gender: '', date: new Date(), phoneNumber: ''};

 export {developerInitialValues, developerFields, clientFields, clientInitialValues, initialValues }
