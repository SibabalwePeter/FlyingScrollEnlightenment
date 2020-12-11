import * as React from 'react';

export default class Footer extends React.PureComponent<{}, { isOpen: boolean }> {
    public state = {
        isOpen: false
    };

    public render() {
        return (
            <footer>
            <div className="footer-copyright text-center py-3">© 2020 Copyright:
              <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
            </div>
          </footer>
        );
    }

    private toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
}
