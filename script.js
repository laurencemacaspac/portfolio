// Live screenshot previews are requested from WordPress mShots for public URLs.
// To use your own permanent screenshots, save assets/<slug>.jpg and set image to that path.
const projects=[
{name:'Noisebox Marketplace',slug:'noisebox',url:'https://noisebox-store.vercel.app',description:'A marketplace for vinyl records, CDs, and merchandise, with buyer and seller workflows and Stripe checkout in test mode.',tags:['Next.js','TypeScript','Supabase','Stripe']},
{name:'LC Mortgage Talent',slug:'lc',url:'https://lc-homepage-concept.vercel.app',description:'An independent homepage design concept for a mortgage recruitment marketplace.',tags:['Next.js','React','UI Design']},
{name:'Wizardry Tutoring',slug:'wizardry',url:'https://wizardry-tutoring-demo.vercel.app',description:'A tutoring website concept focused on a welcoming and responsive learning experience.',tags:['Frontend','Responsive','Education']},
{name:'Food Truck & Catering',slug:'foodtruck',url:'https://food-truck-catering-demo.vercel.app',description:'A custom homepage concept for a food truck business and its catering services.',tags:['Frontend','UI Design','Hospitality']},
{name:'Kane Construction',slug:'kane',url:'https://kane-construction-demo-three.vercel.app',description:'A contemporary website redesign concept for a construction and remodeling business.',tags:['Frontend','Responsive','Business']},
{name:'Rental Property',slug:'rental',url:'https://rentalproperty-nine.vercel.app',description:'A rental property website concept designed to showcase listings and encourage inquiries.',tags:['Frontend','UI Design','Real Estate']},
{name:'Halloween Store',slug:'halloween',url:'https://halloween-client-demo.vercel.app',description:'A seasonal e-commerce storefront concept for Halloween shopping.',tags:['E-commerce','Frontend','Responsive']}
];
const grid=document.querySelector('#project-grid');
for(const project of projects){
 const card=document.createElement('article');card.className='project-card';
 const link=document.createElement('a');link.className='project-link';link.href=project.url;link.target='_blank';link.rel='noopener noreferrer';link.setAttribute('aria-label',`Open ${project.name} live website`);
 const img=document.createElement('img');img.alt=`Homepage preview of ${project.name}`;img.loading='lazy';
 // mShots produces actual captures of public sites, rather than invented mockups.
 // Replace with your own assets/<slug>.jpg for faster, reliable previews.
 img.src=`https://s.wordpress.com/mshots/v1/${encodeURIComponent(project.url)}?w=1200`;
 img.onerror=()=>{img.onerror=null;img.src=`assets/preview-${project.slug}.svg`};
 link.append(img);const arrow=document.createElement('span');arrow.className='arrow';arrow.textContent='↗';arrow.setAttribute('aria-hidden','true');link.append(arrow);
 const info=document.createElement('div');info.className='project-info';const h=document.createElement('h3');h.textContent=project.name;const p=document.createElement('p');p.textContent=project.description;const tags=document.createElement('div');tags.className='tags';for(const tag of project.tags){const t=document.createElement('span');t.textContent=tag;tags.append(t)}info.append(h,p,tags);card.append(link,info);grid.append(card)
}
document.querySelector('#year').textContent=new Date().getFullYear();
