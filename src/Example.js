import React, { Component } from 'react';
import { withTranslation, Trans } from 'react-i18next';

class Example extends Component {
  render() {
    const { t, i18n } = this.props;

    return (
      <div>
        <div>
          <button onClick={() => i18n.changeLanguage('fr')}>français</button>&nbsp;
          <button onClick={() => i18n.changeLanguage('en')}>english</button>
        </div>
        <h1 className="App-title">{t('example.title', 'Example using i18next and i18next-parser')}</h1>
        <p>
          <Trans i18nKey="example.intro">
            We can also use Trans tag, to put <strong>custom tag element</strong> in the translation
          </Trans>
        </p>
        <p>{t('example.newtext')}</p>
      </div>
    );
  }
}

export default withTranslation()(Example);
