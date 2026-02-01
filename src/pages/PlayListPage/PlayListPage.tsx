import { ChangeEvent } from "react";
import { PLAYLISTS } from "../../data";
import "./PlayListPage.css";
import { Link, useSearchParams } from "react-router-dom";

export function PlayListPage() {
	const [searchGenreParam, setSearchGenreParam] = useSearchParams();
	const [searchNameParam, setSearchNameParam] = useSearchParams();


	const handleSearchGenre = (event: ChangeEvent<HTMLInputElement>): void => {
		const { value } = event.target;
		setSearchGenreParam({ searchGenre: value.toLowerCase(), searchName: searchName });
	};
	const handleSearchName = (event: ChangeEvent<HTMLInputElement>): void => {
		const { value } = event.target;
		setSearchNameParam({ searchName: value.toLowerCase(), searchGenre: searchGenre });
	};

	const searchGenre = searchGenreParam.get("searchGenre")?.toLowerCase() || "";
	const searchName = searchNameParam.get("searchName") || "";

	const filteredGenrePlayList = PLAYLISTS.filter(PLAYLISTS =>
		PLAYLISTS.genre.toLowerCase().includes(searchGenre) &&
		PLAYLISTS.name.toLowerCase().includes(searchName)
	);

	return (
		<div className="usersPage">
			<h2>PlayListsPage</h2>

			<div className="users">
				<label>
					введите жанр{" "}
					<input type="text" value={searchGenre} onChange={handleSearchGenre} />
				</label>

				<label>
					введите название{" "}
					<input type="text" value={searchName} onChange={handleSearchName} />
				</label>

				{filteredGenrePlayList.map(({ id, genre, name }) => (

					(genre !== "Non Music") ?
						<Link to={`/playlists/${id}`} key={id}>
							{name}
						</Link> : ""
				))}
			</div>
		</div>
	);
}
