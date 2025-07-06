import type {Genres} from "./Genres.ts";
import type {ImageSet} from "./ImageSet.ts";
import type {StreamingOptions} from "./StreamingOptions.ts";

export class MovieModel {
    public id?: number;
    public title?: string;
    public overview?: string;
    public releaseYear?: number;
    public rating?: number;
    public runTime?: number;
    public directors?: string[];
    public cast?: string[];
    public genres?: Genres[];
    public imageSet?:ImageSet;
    public streamingOptions?:StreamingOptions;
}
