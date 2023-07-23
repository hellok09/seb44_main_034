import { styled } from "styled-components";
import { FONT_SIZE_1, FONT_SIZE_2, FONT_WEIGHT } from "../../common/common";

type PostDateProps = {
  postDate: string;
};

const S = {
  Date: styled.span`
    color: rgba(108, 87, 78, 0.8);
    font-size: ${FONT_SIZE_1.normal_1};
    font-weight: ${FONT_WEIGHT.weight_200};
    @media screen and (max-width: 767px) {
      display: block;
      font-size: ${FONT_SIZE_2.normal_2};
    }
  `,
};

const PostDate = ({ postDate }: PostDateProps) => {
  console.log(postDate);
  // const dateValue = new Date(postDate);
  const dateValue = new Date(postDate);
  const year = dateValue.getFullYear();
  const month =
    dateValue.getMonth() < 9
      ? `0${dateValue.getMonth() + 1}`
      : dateValue.getMonth() + 1;
  const date =
    dateValue.getDate() < 10 ? `0${dateValue.getDate()}` : dateValue.getDate();
  const hours =
    dateValue.getHours() < 10
      ? `0${dateValue.getHours()}`
      : dateValue.getHours();
  const minutes =
    dateValue.getMinutes() < 10
      ? `0${dateValue.getMinutes()}`
      : dateValue.getMinutes();
  // console.log(dateValue);
  // console.log(date);
  // console.log(dateValue.getMonth());
  // console.log(hours);
  // console.log(minutes);
  return (
    <S.Date>
      {year}. {month}. {date}. {hours} : {minutes}
    </S.Date>
  );
};
export default PostDate;
