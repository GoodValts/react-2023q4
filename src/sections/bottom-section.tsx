import React from 'react';

interface BottomSectionProps {
  results: {
    MGLT: string;
    cargo_capacity: string;
    cost_in_credits: string;
    crew: string;
    films: string[];
    length: string;
    manufacturer: string;
    max_atmosphering_speed: string;
    model: string;
    name: string;
    passengers: string;
    starship_class: string;
    url: string;
  }[];
}

class BottomSection extends React.Component<BottomSectionProps> {
  render(): React.ReactNode {
    const { results } = this.props;

    return (
      <section className="bottom-section">
        {results.map((result, index) => (
          <div key={index} className="shipBlock">
            <h3 className="shipBlock__header">{result.name}</h3>
            <div className="shipBlock_params">
              <p className="params_property">Model: {result.model}</p>
              <p className="params_property">Class: {result.starship_class}</p>
              <p className="params_property">Length: {result.length}</p>
              <p className="params_property">
                Cargo capacity: {result.cargo_capacity}
              </p>
              <p className="params_property">Speed: {result.MGLT}</p>
              <p className="params_property">
                Max Speed in Atmosphere: {result.max_atmosphering_speed}
              </p>
              <p className="params_property">Passengers: {result.passengers}</p>
              <p className="params_property">Crew: {result.crew}</p>
              <p className="params_property">
                Produced by: {result.manufacturer}
              </p>
              <p className="params_property">Cost: {result.cost_in_credits}</p>
            </div>
            <a className="shipBlock__link" href={result.url}>
              See more
            </a>
          </div>
        ))}
      </section>
    );
  }
}

export default BottomSection;
