export interface IPlaylistData {
  user_name: string;
  playlist_id: {
    text: string;
    key: number;
  };
  content?: string;
  youtube_url: string;
  album_image: string;
  title: string;
  singer: string;
  maniadb_id: string;
}
