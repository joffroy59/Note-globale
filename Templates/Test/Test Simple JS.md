<%*
  let title = tp.file.title
  if (title.startsWith("Untitled")) {
	title = await tp.system.prompt("Title");
	await tp.file.rename(title);
  }
  console.log(tp.user.say_message('Let templater use my custom scripts!'))
%>