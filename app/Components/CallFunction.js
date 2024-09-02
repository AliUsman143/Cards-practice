import React from 'react'

const CallFunctionMethod = () => {
    const person = {
        fullName: function() {
          return this.firstName + " " + this.lastName;
        }
      }
      const person1 = {
        firstName:"John",
        lastName: "Doe"
      }
      const person2 = {
        firstName:"Mary",
        lastName: "Doe"
      }
      
      // This will return "John Doe":
      person.fullName.call(person1);
      
      
  return (
    <div>CallFunction</div>
  )
}

export default CallFunctionMethod