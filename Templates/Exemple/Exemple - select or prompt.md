<%*
const question = "What?"
let choice = await tp.system.suggester(['Yes','No','User Defined'],['Yes','No','User Defined'], false, question);
if (choice == 'User Defined'){
   choice = await tp.system.prompt(question);
}
alert(choice)
-%>