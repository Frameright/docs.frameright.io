import React from 'react';
import Link from '@docusaurus/Link';

export function GitHubCornerIcon({ href }) {
  return (
    <Link className="github-corner-icon" href={href}>
      <img src="/img/thirdparty/github-mark.svg" alt="GitHub repository" />
    </Link>
  );
}
