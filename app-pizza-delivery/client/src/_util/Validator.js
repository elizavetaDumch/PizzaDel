
const Validator = {

   errors: [],

   validate: function (form) {
      this.errors = [];
      Object.keys(form).forEach(formElementKey => {
         let formElement = form[formElementKey];
         let validation = formElement.validation;
         if (validation) {
            this.checkRequired(formElement);
            this.checkMin(formElement);
         }
      })
      if (Array.isArray(this.errors) && this.errors.length === 0) {
         return true;
      } else {
         return false;
      }
   },
   checkRequired: function (formElement) {
      if (formElement.validation.required) {
         if (!formElement.value || formElement.value == "") {
            this.errors.push(formElement.label + ": Поле обязательно для заполнения");
         }
      }
   },
   checkMin: function (formElement) {
      console.log(formElement)
   }
}

export default Validator