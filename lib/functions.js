const getServices = () =>{
    return(
        {
            construction: {
                title: "建設業",
                subTitle: {
                    generalContractor: "総合工事業",
                    ConstructionOccupation: "職別工事業（設備工事業を除く）",
                    equipmentInstallation: "設備工事業",
                }
            },
            manufacturing: {
                title: "製造業",
                subTitle: {
                    foodManufacturing: "食料品製造業",
                    beverageEtcManufacturing: "飲料・たばこ・飼料製造業",
                    textileIndustry: "繊維工業",
                    manufactureWoodProduct: "木材・木製品製造業（家具を除く）",
                    furnitureEquipmentManufacturing: "家具・装備品製造業",
                }
            },
            telecommunicationsIndustry: {
                title: "情報通信業",
                subTitle: {
                    communicationsIndustry: "通信業",
                    broadcastingIndustry: "放送業",
                    informationServicesIndustry: "情報サービス業",
                    internetAncillaryServices: "インターネット附随サービス業",
                    VideoAudioTextInformation: "映像・音声・文字情報制作業",
                }
            },
            transportation: {
                title: "運輸業",
                subTitle: {
                    roadPassengerTransport: "道路旅客運送業",
                    roadFreightForwarding: "道路貨物運送業",
                    waterTransportationIndustry: "水運業",
                    Warehousing: "倉庫業",
                    servicesIncidentalTransport: "運輸に附帯するサービス業",
                }
            },
            wholesaling: {
                title: "卸売業",
                subTitle: {
                    wholesaleVariousProducts: "各種商品卸売業",
                    wholesaleTextilesClothing: "繊維・衣服等卸売業",
                    wholesaleFoodBeverages: "飲食料品卸売業",
                    constructionParaffinumOther: "建築材料，鉱物・金属材料等卸売業",
                    wholesaleMachineryEquipment: "機械器具卸売業",
                }
            },
            retailing: {
                title: "小売業",
                subTitle: {

                }
            },
            realEstate: {
                title: "不動産",
                subTitle: {

                }
            },
            professionalServices: {
                title: "専門サービス",
                subTitle: {

                }
            },
            lodgingCatering: {
                title: "宿泊・飲食業",
                subTitle: {

                }
            },
            lifeRelated: {
                title: "生活関連",
                subTitle: {

                }
            },
            otherServices: {
                title: "その他サービス",
                subTitle: {

                }
            }
        }
    )
}