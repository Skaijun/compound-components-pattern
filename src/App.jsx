import Accordion from "./components/accordion/Accordion.jsx";

function App() {
  return <main>
    <section>
      <h1>React Patterns & Practices: "Compound Components"</h1>
      <Accordion className="accordion">
        <Accordion.Item className="accordion-item" id='exp'>
          <Accordion.Title className="accordion-item-title">1st Reason to work with us"</Accordion.Title>
          <Accordion.Content className="accordion-item-content">
            <article>
              <p>
                All will be good 1
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere molestias tenetur inventore, impedit error quam eum quasi, ut, a officia modi cum eveniet maiores eligendi atque. Ex officiis esse exercitationem?
              </p>
            </article>
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item className="accordion-item" id='uo'>
          <Accordion.Title className="accordion-item-title">2nd !!! Reason to work with us</Accordion.Title>
          <Accordion.Content className="accordion-item-content">
            <article>
              <p>
                2 e molestias tenetur inventore,
              </p>
              <p>
                Mpedit error quam eum quasi, utLorem ipsum dolor sit amet consectetur adipisicing elit. Facere molestias tenetur inventore, impedit error quam eum quasi, ut, a officia modi cum eveniet maiores eligendi atque. Ex officiis esse exercitationem?
              </p>
            </article>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion>
    </section>
  </main>;
}

export default App;
