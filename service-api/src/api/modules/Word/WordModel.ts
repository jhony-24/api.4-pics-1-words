import ModelBase from "../../../lib/base/ModelBase";

export interface PropsWord {
  idword?: string;
  iduser?: string;
  letters?: string;
  images?: [string] | TImages;
  points?: number;
  dateCreated?: string;
}

export type TImages = { [key: number]: string };
export type TWord = { [key: string]: PropsWord };

export default class WordModel extends ModelBase {
  public idword: string = '';
  public iduser: string = '';
  public letters: string = '';
  public dateCreated: string = '';
  public points: number = 0;
  public images: [string] | TImages = {};
  public props: PropsWord = {};

  constructor() {
    super("word");
  }

  dataCreate(): PropsWord {
    const { idword, ...restProps } = this.props;
    return restProps;
  }

  updateWordData(): PropsWord {
    const { letters, images } = this.props;
    return {
      ...(letters && { letters }),
      ...(images && { images }),
    };
  }

  incrementPoints(points: number) {
    return points + 1;
  }

  getPointsUpdated(newPoint: number): PropsWord {
    return {
      points: newPoint,
    };
  }

  getLastWordPaginate(word: TWord): string {
    let last: string = Object.keys(word).pop() || '';
    return last;
  }

  getCurrentsWordsPaginate(word: TWord, limit: number): TWord {
    if (Object.keys(word).length === (limit + 1)) {
      delete word[this.getLastWordPaginate(word)];
    }
    return word;
  }
}
