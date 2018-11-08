import React, {Component} from 'react';
import List from './components/List';
import Link from './components/Link';
import {PHILOSOPHIE_SOCIAL, PHILOSOPHIE_WEB} from './utils/content';
import Quote from './components/Quote';

const styles = {
  headline: {
    fontFamily: "ff-dagny-web-pro",
    fontStyle: 'italic',
    fontWeight: 900
  },
  wrapper: {
    padding: '60px',
    display: 'flex',
    flexDirection: 'column'
  },
  linksSection: {
    marginTop: '80px'
  }
}

class App extends Component {
  render() {
    const renderList = obj => {
      return (
        <List>
          {Object
            .keys(obj)
            .map(key => {
              const {id, name, url} = obj[key]
              return (
                  <Link id={id} title={name} url={url}/>
              );
            })}
        </List>
      );
    };

    return (
      <div style={styles.wrapper}>
        <p>
          Welcome to Philosophie - a digital innovation studio with offices in Los Angeles
          and New York City. We help organizations validate and develop their promising
          ideas through agile design, rapid prototyping, and software craftsmanship.
        </p>
        <Quote style={styles.quote} />
        <div style={styles.linksSection}>
          <h3 style={styles.headline}>Philosophie Links</h3>
          {renderList(PHILOSOPHIE_WEB)}
          <h3 style={styles.headline}>Philosophie on Social Media</h3>
          {renderList(PHILOSOPHIE_SOCIAL)}
        </div>
      </div>
    );
  }
}

export default App;
