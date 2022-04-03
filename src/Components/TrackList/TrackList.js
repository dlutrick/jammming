import React from "react";
import "./TrackList.css";
import { Track } from "../Track/Track";

export class TrackList extends React.Component {
  renderMap() {
    if (this.props.tracks) {
      return this.props.tracks.map((track) => {
        return <Track track={track} onAdd={this.props.onAdd} key={track.id} />;
      });
    }
  }
  render() {
    return <div className="TrackList">{this.renderMap()}</div>;
  }
}
