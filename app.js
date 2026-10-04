const viewer=document.querySelector('#image-viewer');
if(viewer){document.querySelectorAll('figure button').forEach(button=>button.addEventListener('click',()=>{const original=button.querySelector('img');const image=viewer.querySelector('img');image.src=original.src;image.alt=original.alt;viewer.showModal();}));viewer.querySelector('button').addEventListener('click',()=>viewer.close());viewer.addEventListener('click',event=>{if(event.target===viewer)viewer.close();});}
const preparePrintImages=()=>{const images=[...document.querySelectorAll('main img')];images.forEach(image=>{image.loading='eager';});return images;};
window.addEventListener('beforeprint',preparePrintImages);
document.querySelectorAll('[data-print]').forEach(button=>{
const hint=document.createElement('p');hint.className='print-hint';hint.textContent='Printing in colour: enable Background graphics in your print settings.';button.closest('.tools')?.after(hint);
button.addEventListener('click',async()=>{
button.disabled=true;
try{await Promise.all(preparePrintImages().map(image=>image.decode().catch(()=>{})));window.print();}finally{button.disabled=false;}
});
});
const links=[...document.querySelectorAll('.sidebar a')];
if('IntersectionObserver' in window){const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){links.forEach(link=>link.classList.toggle('active',link.hash==='#'+entry.target.id));}});},{rootMargin:'-15% 0px -65% 0px'});document.querySelectorAll('.section').forEach(section=>observer.observe(section));}
