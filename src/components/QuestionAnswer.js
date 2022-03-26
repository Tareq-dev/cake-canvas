import React from "react";

const QuestionAnswer = () => {
  return (
    <div className="container p-5">
      <h1 className="text-center text-primary">Q/A</h1>
      <div class="accordion" id="accordionPanelsStayOpenExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="panelsStayOpen-headingOne">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseOne"
            >
              How React Works?
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="panelsStayOpen-headingOne"
          >
            <div class="accordion-body">
              <p>
                React is a declarative library. Imagine the following code
                written as an app to demonstrate what we mean by declarative
                coding. Imagine a screen with a navbar, a header, a filter, and
                a list, similar to the one below. This is because each line of
                code defines what each app part is. If there are numerous state
                changes, React does not commit them one after the other. React,
                on the other hand, walks through its virtual DOM, makes a list
                of the modifications that need to be applied to the actual DOM,
                and then performs everything in one go.
              </p>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseTwo"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseTwo"
            >
              State Vs. Props
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingTwo"
          >
            <div class="accordion-body">
              <h4>State</h4>
              <p>
                The state is an updatable structure that can vary over time and
                is used to store data or information about the component. A
                state change can occur as a result of a human action or a system
                event. It is the react component's brain, determining the
                component's behavior and how it will render.
              </p>
              <h4>Props</h4>
              <p>
                Props are components that can only be read. It's an object that
                holds the value of a tag's attributes and functions similarly to
                HTML attributes. It allows data to be sent from one component to
                another. It's comparable to function arguments, and it may be
                supplied to the component in the same manner that function
                arguments can. Because props are immutable, we can't change them
                from within the component.
              </p>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="panelsStayOpen-headingThree">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseThree"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseThree"
            >
              How useState Works?
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingThree"
          >
            <div class="accordion-body">
              <p>
                useState is a Hook that enables state variables to be used in
                functional components. This function takes the initial state and
                returns a variable with the current state value (not necessarily
                the starting state) and another function to update it. useState
                is a Hook that must be called from within a function component
                in order to add some local state to it. The useState function
                returns a pair, the first of which is the current state
                value/initial value, and the second of which is a function that
                may be used to change it. Then, from an event handler or
                someplace else, we'll call this method. This is identical to the
                useState. In the class, setState is used.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionAnswer;
