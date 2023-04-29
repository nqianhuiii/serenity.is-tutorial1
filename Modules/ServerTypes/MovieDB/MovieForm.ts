import { StringEditor, TextAreaEditor, IntegerEditor, DateEditor, EnumEditor, LookupEditor, PrefixedContext } from "@serenity-is/corelib";
import { MovieCastEditor } from "@/MovieDB/MovieCast/MovieCastEditor";
import { MovieKind } from "./MovieKind";
import { initFormType } from "@serenity-is/corelib/q";

export interface MovieForm {
    Title: StringEditor;
    Description: TextAreaEditor;
    CastList: MovieCastEditor;
    Storyline: TextAreaEditor;
    Year: IntegerEditor;
    ReleaseDate: DateEditor;
    Kind: EnumEditor;
    Runtime: IntegerEditor;
    GenreList: LookupEditor;
}

export class MovieForm extends PrefixedContext {
    static formKey = 'MovieDB.Movie';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!MovieForm.init)  {
            MovieForm.init = true;

            var w0 = StringEditor;
            var w1 = TextAreaEditor;
            var w2 = MovieCastEditor;
            var w3 = IntegerEditor;
            var w4 = DateEditor;
            var w5 = EnumEditor;
            var w6 = LookupEditor;

            initFormType(MovieForm, [
                'Title', w0,
                'Description', w1,
                'CastList', w2,
                'Storyline', w1,
                'Year', w3,
                'ReleaseDate', w4,
                'Kind', w5,
                'Runtime', w3,
                'GenreList', w6
            ]);
        }
    }
}

[MovieKind]; // referenced types