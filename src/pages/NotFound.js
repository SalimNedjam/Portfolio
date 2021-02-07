import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const PageNotFound = () => (
  <div className="not-found">
    <Helmet title="404 Not Found">
      <meta name="description" content="Le contenu que vous recherchez est introuvable." />
    </Helmet>
    <h1 data-testid="heading">Page introuvable</h1>
    <p>Retourner à <Link to="/">l&apos;accueil</Link>.</p>
  </div>
);

export default PageNotFound;
