import { Link, useParams } from "react-router-dom";
import { PLAYLISTS } from "../../data";
import "./PlayListInfoPage.css";

export function PlayListInfoPage() {
	const { playlistId } = useParams();
	const playList = PLAYLISTS[Number(playlistId)];
	// let songsList
	// if(playList){
	// 	 songsList = playList.songs
	// }

	console.log(playlistId)
	if (!playList) {
		return (
			<div className="userInfoPage">
				<h2 className="playLists_title">PlayListInfoPage</h2>

				<div className="users">
					<p>Плейлиста с ID {playlistId} не существует</p>
				</div>
			</div>
		);
	}
	return (
		<div className="playListsInfoPage">
			<h2 className="playLists_title">PlayListInfoPage</h2>

			<div className="playLists">
				<h3 className="playLists_title">
					<span className="playListsInfoPage_color2">Жанр: </span>
					<Link to={`/playlists?searchGenre=${playList.genre}`}>
						{playList.genre}
					</Link>
				</h3>
				<h3 className="playLists_title"><span className="playListsInfoPage_color2">Название: </span>{playList.name}</h3>


				{(!playList.songs.length) ?
					<h2>Плейст не найден</h2> :
					playList.songs.map((song, id) => (
						<p className="playLists_item" key={id} >- {song}</p>
					))}

			</div>
		</div>);
}
