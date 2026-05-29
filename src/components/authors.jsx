import React from 'react';
import { render } from 'react-dom';

export default class Authors extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const authors = this.props.authors || [];
    const affiliations = this.props.affiliations || [];
    const meta = this.props.meta || [];
    const hasMeta = Array.isArray(meta) ? meta.length > 0 : Boolean(meta);
    const columnMaxLen = authors.length > 4 ? 3 : Math.max(authors.length, 1);
    const authorClass = `uk-width-1-${columnMaxLen} uk-width-1-${Math.max(authors.length, 1)}@m`;
    const affiliationClass = `uk-width-1-${Math.max(affiliations.length, 1)} uk-margin-small-top`;
    return (
      <div>
        <div
          className="uk-text-primary uk-text-center uk-flex-center uk-grid-collapse"
          data-uk-grid
        >
          {authors.map((author, idx) => {
            const authorAffiliations = author.affiliation || [];
            return (
              <span className={authorClass} key={'author-' + idx}>
                <a target="_blank" className="uk-link-toggle" href={author.url}>
                  {author.name}
                </a>
                {affiliations.length > 0 && authorAffiliations.length > 0 && (
                  <sup>{authorAffiliations.join(',')}</sup>
                )}
              </span>
            );
          })}
        </div>
        {(affiliations.length > 0 || hasMeta) && (
          <div
            className="uk-text-primary uk-text-center uk-grid-collapse"
            data-uk-grid
          >
            {affiliations.map((affiliation, idx) => {
              return (
                <span className={affiliationClass} key={'affiliation-' + idx}>
                  <sup>{idx + 1}</sup>
                  {affiliation}
                </span>
              );
            })}
            {hasMeta && <span className="uk-width-1-1">{meta}</span>}
          </div>
        )}
      </div>
    );
  }
}
