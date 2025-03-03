const siteContent = {
  // BU NESNEYİ DEĞİŞTİRMEYİN
  title: 'Workintech',
  logo: 'https://i.ibb.co/gysPB8V/logo.png',
  links: [
    {
      href: 'programlarimiz.html',
      text: 'Programlarımız',
    },
    {
      href: 'blog.html',
      text: 'Blog',
    },
    {
      href: 'sorulariniz.html',
      text: 'Sorularınız',
    },
    {
      href: 'hakkimizda.html',
      text: 'Hakkımızda',
    },
  ],
};

//TASK-1/////////////////////////////////////////////////////////
document.getElementById('logo-img').src = siteContent.logo;
document.getElementsByTagName('title')[0].textContent = siteContent.title;
const linkler = document.querySelectorAll('header>nav>a');
for (let index = 0; index < linkler.length; index++) {
  linkler[index].href = siteContent.links[index].href;
  linkler[index].textContent = siteContent.links[index].text;
}

