import { Component } from "react";

class FetchData extends Component {
    constructor(props) {
        super(props);
        this.state = { data: null, loading: true };
    }

    componentDidMount() {
        fetch('https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/2244/property/MolecularFormula/JSON')
            .then((response) => response.json())
            .then((data) => this.setState({ data, loading: false }));
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.data !== this.state.data) {
            console.log("Data updated");
        }
    }

    componentWillUnmount() {
        console.log("Cleaning up resources...");
    }

    render() {
        if (this.state.loading) {
            return <p>Loading...</p>;
        }
        return <div>Data: {JSON.stringify(this.state.data)}</div>;
    }
}
export default FetchData