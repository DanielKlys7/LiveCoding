export interface SearchResult {
  id: string;
  name: string;
  imgUrl: string;
}

export const search = async (query: string): Promise<SearchResult[]> => {
  const lowerCaseQuery = query.toLowerCase();
  return new Promise((resolve) => {
    setTimeout(() => {
      const filteredResults = results.filter((result) => {
        const name = result.name.toLowerCase();
        let queryIndex = 0;
        for (let i = 0; i < name.length; i++) {
          if (name[i] === lowerCaseQuery[queryIndex]) {
            queryIndex++;
          }
          if (queryIndex === lowerCaseQuery.length) {
            return true;
          }
        }
        return false;
      });
      resolve(filteredResults);
    }, 1000);
  });
};

const results: SearchResult[] = [
  {
    id: "1",
    name: "Creamy Corn Soup",
    imgUrl:
      "https://www.allrecipes.com/thmb/o5l8oUHIBvg5PkzkM6KNzTTlbgs=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/16643-creamy-corn-soup-DDMFS-beauty-4x3-BG-2748-8c3484c44d9c441b9431d0269b95a45b.jpg",
  },
  {
    id: "2",
    name: "Jamie's Sweet and Easy Corn on the Cob",
    imgUrl:
      "https://www.allrecipes.com/thmb/zRw_Hw8XVMP-47QJjcpoxRqDYE0=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/222352-jamies-sweet-and-easy-corn-on-the-cob-rae-1x1-1-b9082581de2e4f34b3271f6646bcc7c6.jpg",
  },
  {
    id: "3",
    name: "Chef John's Buttermilk Fried Chicken",
    imgUrl:
      "https://www.allrecipes.com/thmb/ZOJ-kl6qtwZ_9b-EODXK7XHAQvY=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/220128-chef-johns-buttermilk-fried-chicken-029-4x3-cropped-7c665dff3dbb482e969c4b2581198eff.jpg",
  },
  {
    id: "4",
    name: "Microwave Corn on the Cob",
    imgUrl:
      "https://www.allrecipes.com/thmb/iiYlFOebAKm8uZpUS3OghULslsU=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():focal(479x0:481x2):format(webp)/838726-103340fb6b7a42e98f58b1b7a88f18dd.jpg",
  },
  {
    id: "5",
    name: "Apricot and Peach Fried Pies",
    imgUrl:
      "https://www.allrecipes.com/thmb/Gi-4dKs39j7g-bV50PILcZ6HMrk=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():focal(639x884:641x886):format(webp)/9000140-apricot-and-peach-fried-pies-Julie-Starr-Scoggins-4x3-1-edc423be7f7a41d7b6d7d8903601f9e3.jpg",
  },
  {
    id: "6",
    name: "Smooth Sweet Tea",
    imgUrl:
      "https://www.allrecipes.com/thmb/rFGxN_E0RH1qDneumgMoqbnt1a8=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():focal(1999x0:2001x2):format(webp)/109190-smooth-sweet-tea-DDMFS-4x3-9e849a386d414cb2b852099f02b6782d.jpg",
  },
  {
    id: "7",
    name: "Crispy Fried Chicken",
    imgUrl:
      "https://www.allrecipes.com/thmb/bxxoOgSQi0eLotY2hCTB_a_XitY=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():focal(999x0:1001x2):format(webp)/8805-CrispyFriedChicken-mfs-3x2-072-d55b8406d4ae45709fcdeb58a04143c2.jpg",
  },
  {
    id: "8",
    name: "Watercress Soup",
    imgUrl:
      "https://www.allrecipes.com/thmb/MR56KggMxk4_AH3I1ie7-chF0Gk=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():focal(1999x0:2001x2):format(webp)/8625006-watercress-soup-ddmfs-4x3-b4f3ac1145bf47609d3d4da043ae3906.jpg",
  },
  {
    id: "9",
    name: "Yakamein (New Orleans-Style Noodle Soup)",
    imgUrl:
      "https://www.allrecipes.com/thmb/gpY3K7FTDEf3PE1rKXKDvRAo3JY=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():focal(1999x0:2001x2):format(webp)/8422264_Yakamein-New-Orleans-Style-Noodle-Soup_John-Mitzewich_4x3-42be22ed3adb4737951a481629db61d6.jpg",
  },
  {
    id: "10",
    name: "Miso Soup",
    imgUrl:
      "https://www.allrecipes.com/thmb/ReZSDY9WsK1o7wDXSx8XLlcc9Uc=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():focal(999x0:1001x2):format(webp)/13107-miso-soup-Melissa-Goff-1x1-1-2962011c74e340fd8afbfaf43ac4b6f2.jpg",
  },
];
