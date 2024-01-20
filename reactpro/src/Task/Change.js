import { Component } from "react";
import data from "../Shared/Constant/constantdata";

class Change extends Component {

    constructor() {
        super();
        this.state = {
            img1: data.Madara,
            // img2:data.Goku,
            // img3:data.Aizen,
            // img4:data.Zoro,
            // img5:data.Tanjiro,
        }
    }

    setnext = () => {
        const { img1 } = this.state
        if (img1 === data.Madara) {
            this.setState(() => ({ img1: data.Goku }))
        }
        else if (img1 === data.Goku) {
            this.setState(() => ({ img1: data.Aizen }))
        }
        else if (img1 === data.Aizen) {
            this.setState(() => ({ img1: data.Tanjiro }))
        }
        else if (img1 === data.Tanjiro) {
            this.setState(() => ({ img1: data.Zoro }))
        }
        else if (img1 === data.Zoro) {
            this.setState(() => ({ img1: data.Galaxy }))
        }
        else if (img1 === data.Galaxy) {
            this.setState(() => ({ img1: data.Star }))
        }
        else if (img1 === data.Star) {
            this.setState(() => ({ img1: data.Aurora }))
        }
        else if (img1 === data.Aurora) {
            this.setState(() => ({ img1: data.Tree }))
        }
        else if (img1 === data.Tree) {
            this.setState(() => ({ img1: data.Naruto }))
        }
        else if (img1 === data.Naruto) {
            this.setState(() => ({ img1: data.Goku2 }))
        }
        else if (img1 === data.Goku2) {
            this.setState(() => ({ img1: data.Madara }))
        }

    }
    setprev = () => {
        if (this.state.img1 === data.Aizen) {
            this.setState(() => ({ img1: data.Goku }))
        }
        else if (this.state.img1 === data.Goku) {
            this.setState(() => ({ img1: data.Madara }))
        }
        else if (this.state.img1 === data.Tanjiro) {
            this.setState(() => ({ img1: data.Aizen }))
        }
        else if (this.state.img1 === data.Zoro) {
            this.setState(() => ({ img1: data.Tanjiro }))
        }
        else if (this.state.img1 === data.Galaxy) {
            this.setState(() => ({ img1: data.Zoro }))
        }
        else if (this.state.img1 === data.Star) {
            this.setState(() => ({ img1: data.Galaxy }))
        }
        else if (this.state.img1 === data.Aurora) {
            this.setState(() => ({ img1: data.Star }))
        }
        else if (this.state.img1 === data.Tree) {
            this.setState(() => ({ img1: data.Aurora }))
        }
        else if (this.state.img1 === data.Naruto) {
            this.setState(() => ({ img1: data.Tree }))
        }
        else if (this.state.img1 === data.Goku2) {
            this.setState(() => ({ img1: data.Naruto }))
        }
        else if (this.state.img1 === data.Madara) {
            this.setState(() => ({ img1: data.Goku2 }))
        }
    }

    render() {
        return (
            <div>
                <button className="btn btn-primary mt-1 " type="button" onClick={this.setprev}>Prev</button>
                <img src={this.state.img1} alt="madara" height="400px" width="400px" />
                <button className="btn btn-primary mt-1 " type="button" onClick={this.setnext}>Next</button>
            </div>
        )
    }
}

export default Change;