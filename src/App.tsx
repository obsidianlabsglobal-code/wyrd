import { FormEvent, useEffect, useState } from 'react';
import { ArrowDownRight, ArrowUpRight, Check, ChevronRight, Circle, Menu, X } from 'lucide-react';

const capabilities = [
  { number: '01', title: 'Digital experiences', detail: 'Websites and interactive environments that make an idea tangible.' },
  { number: '02', title: 'Web applications', detail: 'Useful, considered tools built around the people who use them.' },
  { number: '03', title: 'Digital products', detail: 'Product thinking, interface design and frontend craft in one line of sight.' },
  { number: '04', title: 'AI & intelligent systems', detail: 'Intelligence integrated into products with a clear job to do.' },
  { number: '05', title: 'Design + engineering', detail: 'The detail of design carried all the way through to the browser.' },
];

const process = [
  ['01', 'Understand', 'Find the real question underneath the brief.'],
  ['02', 'Define', 'Give the problem a shape people can act on.'],
  ['03', 'Design', 'Make the idea clear, useful and worth returning to.'],
  ['04', 'Engineer', 'Build the system so the experience holds together.'],
  ['05', 'Refine', 'Remove what does not earn its place.'],
  ['06', 'Ship', 'Put the work in the hands of the people it is for.'],
];

const answers: Record<string, string> = {
  'What does WYRD do?': 'WYRD Designs is a design and technology studio in Bangalore. It works across digital experiences, web applications, digital products, AI, interaction and frontend engineering.',
  'How does WYRD work?': 'WYRD brings design and technology into the same conversation: understand, define, design, engineer, refine and ship.',
  'What can I build with WYRD?': 'The studio works across websites, web applications, digital products, AI-powered experiences, interactive technology and design-led frontend engineering.',
  'How can I contact WYRD?': 'Use the project form on this page to share what you are thinking about. Keep it as rough or as specific as you like.',
};

function App() {
  const [activeCapability, setActiveCapability] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([{ from: 'wyrd', text: 'What are you trying to make clearer?' }]);
  const [formState, setFormState] = useState<'idle' | 'success'>('idle');

  useEffect(() => {
    const cursor = document.querySelector<HTMLElement>('.cursor');
    if (!cursor || window.matchMedia('(prefers-reduced-motion: reduce)').matches || !window.matchMedia('(pointer: fine)').matches) return;
    let x = 0;
    let y = 0;
    let targetX = 0;
    let targetY = 0;
    const move = (event: MouseEvent) => { targetX = event.clientX; targetY = event.clientY; };
    const tick = () => {
      x += (targetX - x) * 0.16;
      y += (targetY - y) * 0.16;
      cursor.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      requestAnimationFrame(tick);
    };
    window.addEventListener('mousemove', move);
    const frame = requestAnimationFrame(tick);
    return () => { window.removeEventListener('mousemove', move); cancelAnimationFrame(frame); };
  }, []);

  const handleContact = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormState('success');
  };

  const ask = (question: string) => {
    const answer = answers[question] ?? 'I do not have that information in my current knowledge base.';
    setMessages((current) => [...current, { from: 'you', text: question }, { from: 'wyrd', text: answer }]);
  };

  return (
    <div className="site-shell">
      <div className="cursor" aria-hidden="true" />
      <header className="nav-wrap">
        <nav className="nav" aria-label="Main navigation">
          <a className="brand" href="#top" aria-label="WYRD Designs home">
            <img src="/Logo_Design_Black_final.png" alt="WYRD Designs" />
          </a>
          <div className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
            <a href="#studio" onClick={() => setMenuOpen(false)}>Studio</a>
            <a href="#capabilities" onClick={() => setMenuOpen(false)}>Capabilities</a>
            <a href="#approach" onClick={() => setMenuOpen(false)}>Approach</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          </div>
          <a className="nav-cta" href="#contact">Start a conversation <ArrowUpRight size={15} /></a>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>{menuOpen ? <X /> : <Menu />}</button>
        </nav>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy reveal">
            <p className="eyebrow"><span className="eyebrow-mark" /> Design + technology studio · Bangalore</p>
            <h1 id="hero-title">Make the <em>complex</em><br />feel considered.</h1>
            <p className="hero-intro">WYRD designs digital products, experiences and systems where technology has a point of view.</p>
            <a className="button button-dark" href="#capabilities">Explore the practice <ArrowDownRight size={17} /></a>
          </div>
          <div className="hero-art" aria-label="A moving geometric visual system" role="img">
            <div className="art-caption">A system in progress <span>01—05</span></div>
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="orbit orbit-three" />
            <div className="core"><span>W</span></div>
            <div className="art-node node-one" /><div className="art-node node-two" /><div className="art-node node-three" />
            <div className="art-label label-one">idea</div><div className="art-label label-two">form</div><div className="art-label label-three">system</div>
          </div>
          <div className="hero-foot"><span>Scroll to enter</span><div className="scroll-line" /><span>01 / 07</span></div>
        </section>

        <section className="studio section-grid" id="studio" aria-labelledby="studio-title">
          <div className="section-meta"><span>01</span><span>The studio</span></div>
          <div className="studio-content">
            <h2 id="studio-title">Not a line between design and technology. <i>A place where they meet.</i></h2>
            <div className="studio-bottom"><p>WYRD is a design and technology studio in Bangalore. We work across web, applications, digital products, AI and interaction — shaping the idea and the system around it together.</p><span className="stamp">Design<br />Technology<br />Human intent</span></div>
          </div>
        </section>

        <section className="capabilities section-grid" id="capabilities" aria-labelledby="capabilities-title">
          <div className="section-meta"><span>02</span><span>What we make</span></div>
          <div className="capabilities-content">
            <div className="section-heading-row"><div><p className="eyebrow">The practice</p><h2 id="capabilities-title">A few ways<br /><i>in.</i></h2></div><p className="heading-note">Different starting points.<br />One considered outcome.</p></div>
            <div className="capability-layout">
              <div className="capability-list" role="list">
                {capabilities.map((capability, index) => (
                  <button className={`capability-item ${activeCapability === index ? 'active' : ''}`} key={capability.number} onMouseEnter={() => setActiveCapability(index)} onFocus={() => setActiveCapability(index)} onClick={() => setActiveCapability(index)} role="listitem">
                    <span>{capability.number}</span><strong>{capability.title}</strong><ChevronRight size={20} /><small>{capability.detail}</small>
                  </button>
                ))}
              </div>
              <div className={`capability-art art-${activeCapability}`} aria-hidden="true"><div className="cap-art-grid" /><div className="cap-art-shape" /><span>0{activeCapability + 1}</span></div>
            </div>
          </div>
        </section>

        <section className="system-section" aria-labelledby="system-title">
          <div className="system-intro"><p className="eyebrow">A working relationship</p><h2 id="system-title">The idea is only<br />the beginning.</h2><p>What happens next is the work: a conversation between people, interfaces, technology and intent.</p></div>
          <div className="system-map" aria-label="The relationship between idea, design, technology, people and outcome">
            <svg viewBox="0 0 700 520" role="img" aria-hidden="true"><path d="M110 260 C190 60 360 80 440 180 S600 380 530 450" /><path d="M170 410 C270 340 280 180 410 100 S570 130 620 250" /><path d="M80 170 C240 220 270 450 510 390" /></svg>
            {['idea', 'design', 'technology', 'people', 'outcome'].map((label, index) => <button className={`system-node system-node-${index}`} key={label}><span /><b>{label}</b></button>)}
            <div className="system-center">WYRD<br /><small>the space between</small></div>
          </div>
        </section>

        <section className="approach section-grid" id="approach" aria-labelledby="approach-title">
          <div className="section-meta"><span>03</span><span>How we work</span></div>
          <div className="approach-content"><div className="section-heading-row"><div><p className="eyebrow">The approach</p><h2 id="approach-title">Shape the question.<br /><i>Then make it real.</i></h2></div><p className="heading-note">A process with room<br />for the work to change.</p></div>
            <div className="process-list">{process.map(([number, title, text]) => <div className="process-row" key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p><Circle size={9} /></div>)}</div>
          </div>
        </section>

        <section className="belief section-grid" aria-labelledby="belief-title"><div className="section-meta"><span>04</span><span>The point of view</span></div><div className="belief-content"><p className="eyebrow">Design × technology</p><h2 id="belief-title">The best digital work does not ask you to admire the machinery. <i>It lets you get somewhere.</i></h2><div className="belief-rule" /><p className="belief-note">Clarity is not the opposite of ambition. It is how ambition becomes useful.</p></div></section>

        <section className="contact section-grid" id="contact" aria-labelledby="contact-title"><div className="section-meta"><span>05</span><span>Start here</span></div><div className="contact-content"><div className="contact-copy"><p className="eyebrow">A considered beginning</p><h2 id="contact-title">Have a difficult problem worth designing around?</h2><p>Tell us what is taking shape. A sentence is enough to start.</p><button className="ask-link" onClick={() => setChatOpen(true)}>Or ask WYRD a question <ArrowUpRight size={16} /></button></div><form className="contact-form" onSubmit={handleContact}>{formState === 'success' ? <div className="form-success"><Check size={22} /><h3>That is a good place to begin.</h3><p>Your note has been captured for this session. We will need a connected inbox before this form can send messages.</p><button type="button" onClick={() => setFormState('idle')}>Send another note</button></div> : <><label>Name<input required name="name" placeholder="Your name" /></label><label>Email<input required type="email" name="email" placeholder="you@company.com" /></label><label>What are you making?<textarea required name="message" rows={4} placeholder="A few words about the problem, idea or opportunity..." /></label><button className="button button-dark" type="submit">Send the note <ArrowUpRight size={16} /></button></>}</form></div></section>
      </main>

      <footer className="footer"><a className="brand" href="#top"><img src="/Logo_Design_Black_final.png" alt="WYRD Designs" /></a><div className="footer-middle"><span>Bangalore, India</span><a href="#capabilities">Capabilities <ArrowUpRight size={14} /></a><a href="#contact">Contact <ArrowUpRight size={14} /></a></div><div className="footer-end"><span>© 2025 WYRD Designs</span><a href="#top">Back to top ↑</a></div></footer>

      <button className="ask-wyrd" onClick={() => setChatOpen(true)} aria-label="Open Ask WYRD"><span className="status-dot" /> Ask WYRD <ArrowUpRight size={15} /></button>
      {chatOpen && <div className="chat-overlay" role="dialog" aria-modal="true" aria-labelledby="chat-title"><div className="chat-panel"><div className="chat-header"><div><p className="eyebrow">A small conversation</p><h2 id="chat-title">Ask WYRD</h2></div><button onClick={() => setChatOpen(false)} aria-label="Close chat"><X /></button></div><div className="chat-messages">{messages.map((message, index) => <p className={message.from} key={`${message.text}-${index}`}>{message.text}</p>)}</div><div className="chat-prompts">{Object.keys(answers).map((question) => <button key={question} onClick={() => ask(question)}>{question}</button>)}</div><p className="chat-note">Answers are based only on the information on this page.</p></div></div>}
    </div>
  );
}

export default App;
