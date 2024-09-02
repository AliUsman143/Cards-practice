import React from "react";
import Button from "./Button";
const Component11 = () => {
  const cardDataArray = [
    {
      imgSrc:
        "data:image/jpeg;base64,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",
      title: "Card Title ",
      description: "This is the description of the card.",
    },
    {
      imgSrc:
        "data:image/jpeg;base64,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",
      title: "Card Title 2",
      description: "This is the description for card 2.",
    },
    {
      imgSrc:
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQA3wMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABgIDBAUHAQj/xAA/EAABAwMCBAIHBQYEBwAAAAABAAIDBAUREiEGMUFhE1EHFCJCcZGhMoGxwdEjM0NScqIVJJLwFmJzgpPC4f/EABoBAQEBAQEBAQAAAAAAAAAAAAABAgMEBgX/xAAmEQEBAAICAgECBwEAAAAAAAAAAQIRAyESMVEEQRQVIjJhkaET/9oADAMBAAIRAxEAPwDuKIiAiIgIiICIiAiIgIiICIiAiFWaidkLC5x+7KC8ixKe4QTEszpeDjSVlZQeoiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAqS7Aydh3Xj3tjY57yGtaMknkAoDDxM68cU1NPTykUlPB7LQftHPNBNJKwPm8GI9yVr7xUtijc559loyVTad6mQk+7stDxvUPp6cE7NfIGk/X8lZEWqGsdLM58jsmR2T2U1tUzpqVus5c3Ylc0tVSDI3K6Fw/IHQPGcnYpRtkRFFEREBERAREQEREBERAREQEREBERAREQF4TgZQrCp6xlYyR8TgY2yPjB7tcWn6goI76RX3eSyGOzU8kwe7E/hbvDOw6/cuY8A1Ji4pbG8/v43M38+f5Fd1wuW+kDh82O6w8SW1mIhOx88Y9x+eY7O3HxVEwiqJqerhcxoMRJ8b4YOCPvWzuNvp7nTlkrGSMf0dyP6LUteyVrJYzmN7Q5p8wVnUNaYCGPyY87Y5tViI1LwqaSoPqVUBj+FNz+4hSi00raOMDxiZi3fphaDjKqq6e21M1s1vmc9oD426ixpI1Ox1wMqL2Piy7m7xWqqZFKTLo1yNcyRzehx5YGeSK6hVVEsJYWyEhztO45bFV09a/wARrJNw7bPJaupqHPpH5+1Hpf8A6SHfkslmnUHZ5d0anpux8cr1YNvrvW3Sxlml8Rwe6zllkREQEREBERAREQEREBERAREQEREHjlFbAKm1Xe42qrjcKeWofU0U/uvD/acz4g5P1Uoc8Bau90rK+mDYpDHUxOEkEn8rx+R5fepbprGS3VWLhfqahu9HbJGudNVAlpyAAB+v5LPqaenuFFJTzsbLTyt0vaeoKjF0om8T2zW1ngXajduOTo3jfn5HmCsnhi9+tQGCryKqE6Zo/I8tQ7FJk65cOsevcWaS3vtcDKJz/EjhBbE8+8zO3345rJYtzXU/rEGxGsbtK0jMg4IwfJajzqw0dNvgrT6WH1gT+GwzAYEmgagPir6DsqK6ekmkw8NBjII3PNZLKUxsa1pc0NGOecBU0D3uLoRKYwBqA09+6y9BBBc8nHltlFjGsrHMuVY1wA5EY94Hqt2sOlA8YnAyG4z2WYsgiIgIiICIiAiIgIiICIiAiIgLHnm8PGzviCP1VUr+gIH3q015OzgCOxygxpaprMCQ+GTy1dfv/wDqtEeLu9xZD32L/wBAs/DSNjhaStlkbO6KXIx/d3Wl38NXdiLVVNutraMtGKiFg2kZ12HXurd7pxUxQ8S2Ah72j9tG0fvG9QR5hR/jC93K2XCndRUpNK0ftDo2fkn3vdxtufNWeFuJxb6wTBj22+sAldFj7IPUD7uXVc8pp6+LPz6+8/3+HQuG7pBdKMSU0mpgwdJOXM7H8l5dIfCqPFZ9iQ/VZtupqGCIy26GFkdQfEL4gAH91drIBPA5h5kbfFWPNnq5XUaZjw4Y6qpU01JUS5LWhg83rNbbZMH9u3/QtubBcdjjY+eOqzqerY2CNphkdIAA4sbkEqzPRzwguIDwPeZ0+5W4KySnjLGAP1vAYCQMZwMbd/xQbiF2HB/IeSzlqWtkkj01DNDuR0u5rNpKmOcPax4c6N2lwHRSrpkoiKAiIgIiICIiAiIgIhWLWV1PRs11M0cQ6a3AZQkt9MnKtuk32yo3PxO3UD6mHNGdxOzP4qqg4oobi99O0zU8430kDJ7jGchZ8o736blk8vHpuKiphg/fOczqDp5rGq6tsUWt8bZI3A6Hs2yeg7cua1tVcZXwubOYg3mXkbfHyWPG18rNbGvfH0LRkYW3BmvuL5KQxvjBe4Dry+/zCxpZHSfvHFxAwCfJWNWDn6I1+25VRZrYWywuZKA+JwIcxwyFG7hT0DA3WCCG6WtDcBrfIKUVBHh8wo1dWMeDrAOB1UreGWrtncH8QxWypjttVUZpKh2IHP2Mbz0Oeh/H4roechcW8Bg/Z+G053kyPop3wFxPHeIJrfLJqrKPYFzsmWPo7PUjkfn1WJNNcmVzy8qxvSRxBd+H4IDa44Wx1GWune3UWOHQDlyzzXNYeLeJZpC43uqB8g7AXauKrO2+WSpoSBrc3MbvJ43H++6+ehrgqHRPbpex5Y4HoQcH6rW3N1j0dcZ19zuJtF3cJpTGZIZw3BOOYOOe3Vbu8zutd3jEp/ytTvHI7YMkHuk99iD0UV9D9tEtwuF1ec+CBBGMdTuT+C6Pd7dBdqCSkqW5Y8bEc2noR3Ct9dOnFcJl+udLNuM0sJlfMS0kjw3DOMd+izKKKOmeRFsJHFzu5K5lfLVxHbGGEyVFTSAbSQ77d8bhYNpv1fT1EL/8Qn0MeC6KR+xx03XO8mutPd+XeWHnhnK7WvVZppm1EMcsbsse3IPZXlt+b66EREBERARF45BTLIyJjnyODGNGXOccAD4rWxcR2WTGm7UZzyzM0ZUG9Lt+qYBBZ6N5Y2VniTkdRnZvw2XLfVw9mSXZKs7XXy+moamGcZgmjkaeRY8Oz8l6Y2Al3htyeZ0818qyRGOTLSR5EHBVbaisZ9mtq2/01Dhn5FEfS9ZbaGoB8ajicfPRj8FHqzgmzTvDvDmicDn2H4/FcHdPUu3dVVLv6pnH81lWy9Xa2TeLQXGqiIP2fGc5p/7Tt9FNY/Drhz8vH1jlY7xQ8L2mjkbKad08zeT6iQyEfPkonxF6UTbbzPQ2+2x1UFM7w5ZTOW5eOYaADy5Z+ixbX6WImUbm3agmFW1nsSU4BY89wSC36hcxfI6V75Hbvke57viTla6npnPkzz/ddu92m8W/iq2mroCWzMwJIn41xu8nY/ELGLiNjseq5r6NKmSk4xoWRu9iqZJFK3OxGguG3YtC6bVRSSV8zImF2XZ9n4JtjTFmecYytNc5o4YpJZ3NZHHzc7kpNHZ3vGqokDB/I3f6o+3UkW/gNcRyLtyFm1Y5FU1dxu73RUME7abOMhp1SdyVIOFbNera/wBboqQesRNL42ukALyBu3bzAwphK6CGQNyxhJwGnAz81l0Ly2oaQ37J6rDdx6SS21ja+kjqBE+FxaNcMmzonYGWnuFzj0o8K+G519oWew4/5tjRyP8AOPz+fmp5c6O6w3plztxilpHQ6KqkOzpCDkOYcYLuY3x+GM2lqaW5UYkhcyankaQcjbuCOh8wVtzcK4a4luXDr5pLa6N8c2DLBMMtJHXoQpTS+lqqZI0XCyxui990ExDgOzXAg/MLW8e8GyWGeS42+Nz7bIclo/gHrnt3UP1B7dlrY+g7LerffaH1q2T+IzOHN5OjPk4dCr08Mcv72Nj/AOpuV892q619huDKy2zaJG7OafsyN8iF2XhPjKg4ljEWRTV4Ht0znc+7T1H1SX5N69JdQvaWaQANO2yylqY3mJ4Lei2jHBzQ4cipYKkRFAREQFS47L1eE7c8IOL8RVRrb5WPAJ1TljdR6DI/9VHrkxzoWywx5cTp0tG53xjC6LxbwdVSVM1Va4RJG72hTxv0HV1588nJyue1tPeLdNmpstZCWtySY3HfO24yM9wV45jnM9x9H+I+l5Pppx5XSP1EFTG8iamqGOBx7UThv8lYBJOnBz5YUxo/STe7e5sU8ME8I30VbTr6cnc/mCpBRele1vIbXWkxv6ug0vH1C9ktvdfP54zHLUu45j4EpG0Mh+DCgpqjn6tP/wCJ36Ls8HpH4VlA8R80H/UpSR/blbmi4j4frzppbpQyP6NDwD8jujD5/wDVap23qk58v2Tv0W5t3B98rnNEdvka0+9Lhg+q7xmMjLdBHmMKkuDTkv27nCnaobwpwJHaKyG4VlR4tXFnS1gwxuQQfjsVM2tDRsAPPHVa2uv1pt4PrtzpYiPddKNXy5qP1PpK4fa4x0Zq6146QwED+7H4Id/ZseO7jXW2wvmtpDZnSNZ4hGdA8/ouX+LxPc8+NWXKYHbEWpjR8sBTmbjC41jSyi4bqJGHkZnaQVivqOMazaKnoaNn9JeR+Sxvfp7ccLhj3r+0Wt/CNbLOHVcMjBkZllly4dwPNT2pulHTVA8epYHPdhkecuefIDmStS3hC/3De4XmocDzEeGD5DCk/DHCUdkdrhJe4uyXvAcQfPJGVY48lmvabsB0Nzzwo1HwwbRVVNdYql8Pi+2+ik9qF55nA5tPkRy+ikrfsherbzozY+IbZxDFJTsOioaC2ajnHtN89uo7hQDjb0fyUJkuNiiMlLjMtM0e1F3aOo7dF1KusVprnulqKGEzu/jtbplafMPHtA9wVGqWv4ptFe+kulqludEXHwa2kILw3Owe3bJHwGe+6Dh0jmnZUNOl4exzmPG4c04IPmCOS6xxHwdZeJ3y1diq2UdxIzJA8Fmo/wDOw4LT3xhcuvFpuVkqTT3SlkgfnAJGWu7hw2KbNJnYPSRcKGNsN4iNdCBgTNwJQO/QqfcNcb2i818NJRTzCaTOYZYXNOMZ58unmuE0kc1U4hjdm/aJOwXTPRFYz/ic1fUNLRTtwzu536DPzTznp0/5Z+PlZ068DsvVSDsqkcxERBSi9AXqCkgKzLJ4bTpGSAshUuY08wggXEcldVsnjbQU+XNLWSGIFzdsZC5nVcIVfiPc6HUSc7tX0I+njd7qsPtsDt9AQfN83CVxLj+zkx2BVH/Ct1c3QInkd2r6PNpgPuBUi0QfyBB8/wBFwnxAG6ITO0eQc4fmt1S8BXyqaGVVwqWjzMrj+a7XHbY29MK+yljZ0Qcvtnowt0bmyVLTPIObnE4P3KX0PDFHSBoip2Mx5NUmETRyCqAwg1bLZG0bNCyI6GNnNoWaiLtZZAxvIBXNI8lUiIKkhVIgtEK27KyMKksygi3EnC9pvdQysrI5WVkbA1tRBKWPDQSQNvifmorfbTcTC6koqirqKZzcOiqntkHxGRkLqDqdrtyrRooj0Us37dOPkywu44lTcK3UuDZYY2Rt5aSuu8MUdPQ2mKGlYWDGXajlxd1JWd/h8Pkr8MDIgQ3qs48cnbtz/VcnNNZLgVSItvKIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIg//Z",
      title: "Card Title 3",
      description: "This is the description for card 3.",
    },
    {
      imgSrc:
        "data:image/jpeg;base64,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",
      title: "Card Title 4",
      description: "This is the description for card 4.",
    },
    {
      imgSrc:
        "data:image/jpeg;base64,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",
      title: "Card Title 5",
      description: "This is the description for card 5.",
    },
  ];
  return (
    <div className="bgpops flex justify-center px-7 py-8 flex-wrap gap-4  items-center h-auto ">
      {cardDataArray.map((item, index) => (
        <Button
          key={index}
          imgSrc={item.imgSrc}
          title={item.title}
          description={item.description}
          imgdiv="w-full h-44 object-center overflow-hidden"
          titleStyle={
            index === 0
              ? "text-2xl font-bold text-red-500" // Style for card 2
              : index === 1
              ? "text-2xl text-green-500" // Style for card 3
              : index === 2
              ? "text-2xl text-green-500"
              : index === 3
              ? "text-2xl text-green-500"
              : "text-xl text-red-700" // Default style for other cards
          }
          descriptionStyle={
            index === 1
              ? "text-md text-black"
              : index === 2
              ? "text-md text-red-400"
              : "text-gray-700 text-base"
          }
        />
      ))}
    </div>
  );
};

export default Component11;
