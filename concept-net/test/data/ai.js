module.exports = {
    "@context": [
        "http://api.conceptnet.io/ld/conceptnet5.7/context.ld.json"
    ],
    "@id": "/c/en/ai",
    "edges": [
        {
            "@id": "/a/[/r/IsA/,/c/en/ai/,/c/en/artificial_intelligence/]",
            "@type": "Edge",
            "dataset": "/d/conceptnet/4/en",
            "end": {
                "@id": "/c/en/artificial_intelligence",
                "@type": "Node",
                "label": "artificial intelligence",
                "language": "en",
                "term": "/c/en/artificial_intelligence"
            },
            "license": "cc:by/4.0",
            "rel": {
                "@id": "/r/IsA",
                "@type": "Relation",
                "label": "IsA"
            },
            "sources": [
                {
                    "@id": "/and/[/s/activity/omcs/is_a_cleanup/,/s/contributor/omcs/odin/]",
                    "@type": "Source",
                    "activity": "/s/activity/omcs/is_a_cleanup",
                    "contributor": "/s/contributor/omcs/odin"
                },
                {
                    "@id": "/and/[/s/activity/omcs/vote/,/s/contributor/omcs/slux/]",
                    "@type": "Source",
                    "activity": "/s/activity/omcs/vote",
                    "contributor": "/s/contributor/omcs/slux"
                }
            ],
            "start": {
                "@id": "/c/en/ai",
                "@type": "Node",
                "label": "AI",
                "language": "en",
                "term": "/c/en/ai"
            },
            "surfaceText": "[[AI]] is [[artificial intelligence]]",
            "weight": 2.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/ja/ai/n/,/c/en/ai/]",
            "@type": "Edge",
            "dataset": "/d/jmdict",
            "end": {
                "@id": "/c/en/ai",
                "@type": "Node",
                "label": "ai",
                "language": "en",
                "term": "/c/en/ai"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/jmdict/1.07",
                    "@type": "Source",
                    "contributor": "/s/resource/jmdict/1.07"
                }
            ],
            "start": {
                "@id": "/c/ja/ai/n",
                "@type": "Node",
                "label": "ai",
                "language": "ja",
                "sense_label": "n",
                "term": "/c/ja/ai"
            },
            "surfaceText": null,
            "weight": 2.0
        },
        {
            "@id": "/a/[/r/FormOf/,/c/en/ais/n/,/c/en/ai/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/ai",
                "@type": "Node",
                "label": "ai",
                "language": "en",
                "term": "/c/en/ai"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/FormOf",
                "@type": "Relation",
                "label": "FormOf"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/ais/n",
                "@type": "Node",
                "label": "ais",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/ais"
            },
            "surfaceText": null,
            "weight": 2.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/en/ai/n/wn/military/,/c/en/army_intelligence/n/wn/military/]",
            "@type": "Edge",
            "dataset": "/d/wordnet/3.1",
            "end": {
                "@id": "/c/en/army_intelligence/n/wn/military",
                "@type": "Node",
                "label": "Army Intelligence",
                "language": "en",
                "sense_label": "n, military",
                "term": "/c/en/army_intelligence"
            },
            "license": "cc:by/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/wordnet/rdf/3.1",
                    "@type": "Source",
                    "contributor": "/s/resource/wordnet/rdf/3.1"
                }
            ],
            "start": {
                "@id": "/c/en/ai/n/wn/military",
                "@type": "Node",
                "label": "AI",
                "language": "en",
                "sense_label": "n, military",
                "term": "/c/en/ai"
            },
            "surfaceText": "[[AI]] is a synonym of [[Army Intelligence]]",
            "weight": 2.0
        },
        {
            "@id": "/a/[/r/UsedFor/,/c/en/lisp/,/c/en/ai/]",
            "@type": "Edge",
            "dataset": "/d/conceptnet/4/en",
            "end": {
                "@id": "/c/en/ai",
                "@type": "Node",
                "label": "AI",
                "language": "en",
                "term": "/c/en/ai"
            },
            "license": "cc:by/4.0",
            "rel": {
                "@id": "/r/UsedFor",
                "@type": "Relation",
                "label": "UsedFor"
            },
            "sources": [
                {
                    "@id": "/and/[/s/activity/omcs/commons_manual_entry/,/s/contributor/omcs/leslietimmy/]",
                    "@type": "Source",
                    "activity": "/s/activity/omcs/commons_manual_entry",
                    "contributor": "/s/contributor/omcs/leslietimmy"
                },
                {
                    "@id": "/and/[/s/activity/omcs/vote/,/s/contributor/omcs/browni/]",
                    "@type": "Source",
                    "activity": "/s/activity/omcs/vote",
                    "contributor": "/s/contributor/omcs/browni"
                }
            ],
            "start": {
                "@id": "/c/en/lisp",
                "@type": "Node",
                "label": "Lisp",
                "language": "en",
                "term": "/c/en/lisp"
            },
            "surfaceText": "[[Lisp]] is used for [[AI]].",
            "weight": 2.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/ja/人工知能/n/,/c/en/ai/]",
            "@type": "Edge",
            "dataset": "/d/jmdict",
            "end": {
                "@id": "/c/en/ai",
                "@type": "Node",
                "label": "ai",
                "language": "en",
                "term": "/c/en/ai"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/jmdict/1.07",
                    "@type": "Source",
                    "contributor": "/s/resource/jmdict/1.07"
                }
            ],
            "start": {
                "@id": "/c/ja/人工知能/n",
                "@type": "Node",
                "label": "人工知能",
                "language": "ja",
                "sense_label": "n",
                "term": "/c/ja/人工知能"
            },
            "surfaceText": null,
            "weight": 2.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/en/ai/n/wn/cognition/,/c/en/artificial_intelligence/n/wn/cognition/]",
            "@type": "Edge",
            "dataset": "/d/wordnet/3.1",
            "end": {
                "@id": "/c/en/artificial_intelligence/n/wn/cognition",
                "@type": "Node",
                "label": "artificial intelligence",
                "language": "en",
                "sense_label": "n, cognition",
                "term": "/c/en/artificial_intelligence"
            },
            "license": "cc:by/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/wordnet/rdf/3.1",
                    "@type": "Source",
                    "contributor": "/s/resource/wordnet/rdf/3.1"
                }
            ],
            "start": {
                "@id": "/c/en/ai/n/wn/cognition",
                "@type": "Node",
                "label": "AI",
                "language": "en",
                "sense_label": "n, cognition",
                "term": "/c/en/ai"
            },
            "surfaceText": "[[AI]] is a synonym of [[artificial intelligence]]",
            "weight": 2.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/en/ai/n/wn/animal/,/c/en/three_toed_sloth/n/wn/animal/]",
            "@type": "Edge",
            "dataset": "/d/wordnet/3.1",
            "end": {
                "@id": "/c/en/three_toed_sloth/n/wn/animal",
                "@type": "Node",
                "label": "three-toed sloth",
                "language": "en",
                "sense_label": "n, animal",
                "term": "/c/en/three_toed_sloth"
            },
            "license": "cc:by/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/wordnet/rdf/3.1",
                    "@type": "Source",
                    "contributor": "/s/resource/wordnet/rdf/3.1"
                }
            ],
            "start": {
                "@id": "/c/en/ai/n/wn/animal",
                "@type": "Node",
                "label": "ai",
                "language": "en",
                "sense_label": "n, animal",
                "term": "/c/en/ai"
            },
            "surfaceText": "[[ai]] is a synonym of [[three-toed sloth]]",
            "weight": 2.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/ja/アナログ入力/n/,/c/en/ai/]",
            "@type": "Edge",
            "dataset": "/d/jmdict",
            "end": {
                "@id": "/c/en/ai",
                "@type": "Node",
                "label": "ai",
                "language": "en",
                "term": "/c/en/ai"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/jmdict/1.07",
                    "@type": "Source",
                    "contributor": "/s/resource/jmdict/1.07"
                }
            ],
            "start": {
                "@id": "/c/ja/アナログ入力/n",
                "@type": "Node",
                "label": "アナログ入力",
                "language": "ja",
                "sense_label": "n",
                "term": "/c/ja/アナログ入力"
            },
            "surfaceText": null,
            "weight": 2.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/en/ai/n/wn/act/,/c/en/artificial_insemination/n/wn/act/]",
            "@type": "Edge",
            "dataset": "/d/wordnet/3.1",
            "end": {
                "@id": "/c/en/artificial_insemination/n/wn/act",
                "@type": "Node",
                "label": "artificial insemination",
                "language": "en",
                "sense_label": "n, act",
                "term": "/c/en/artificial_insemination"
            },
            "license": "cc:by/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/wordnet/rdf/3.1",
                    "@type": "Source",
                    "contributor": "/s/resource/wordnet/rdf/3.1"
                }
            ],
            "start": {
                "@id": "/c/en/ai/n/wn/act",
                "@type": "Node",
                "label": "AI",
                "language": "en",
                "sense_label": "n, act",
                "term": "/c/en/ai"
            },
            "surfaceText": "[[AI]] is a synonym of [[artificial insemination]]",
            "weight": 2.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/en/dri/n/,/c/en/ai/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/ai",
                "@type": "Node",
                "label": "ai",
                "language": "en",
                "term": "/c/en/ai"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/dri/n",
                "@type": "Node",
                "label": "dri",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/dri"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/HasProperty/,/c/en/ai/,/c/en/good/]",
            "@type": "Edge",
            "dataset": "/d/conceptnet/4/en",
            "end": {
                "@id": "/c/en/good",
                "@type": "Node",
                "label": "good",
                "language": "en",
                "term": "/c/en/good"
            },
            "license": "cc:by/4.0",
            "rel": {
                "@id": "/r/HasProperty",
                "@type": "Relation",
                "label": "HasProperty"
            },
            "sources": [
                {
                    "@id": "/and/[/s/activity/omcs/commons2_template/,/s/contributor/omcs/pacslim/]",
                    "@type": "Source",
                    "activity": "/s/activity/omcs/commons2_template",
                    "contributor": "/s/contributor/omcs/pacslim"
                }
            ],
            "start": {
                "@id": "/c/en/ai",
                "@type": "Node",
                "label": "AI",
                "language": "en",
                "term": "/c/en/ai"
            },
            "surfaceText": "[[AI]] is [[good]]",
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/en/ivf/n/,/c/en/ai/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/ai",
                "@type": "Node",
                "label": "ai",
                "language": "en",
                "term": "/c/en/ai"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/ivf/n",
                "@type": "Node",
                "label": "ivf",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/ivf"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/EtymologicallyDerivedFrom/,/c/en/ai/,/c/pt/aí/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/pt/aí",
                "@type": "Node",
                "label": "aí",
                "language": "pt",
                "term": "/c/pt/aí"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/EtymologicallyDerivedFrom",
                "@type": "Relation",
                "label": "EtymologicallyDerivedFrom"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/ai",
                "@type": "Node",
                "label": "ai",
                "language": "en",
                "term": "/c/en/ai"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/ExternalURL/,/c/en/ai/n/,/http://sw.opencyc.org/2012/05/10/concept/en/CardiacVentricle_ApicalInferiorRegion/]",
            "@type": "Edge",
            "dataset": "/d/opencyc",
            "end": {
                "@id": "http://sw.opencyc.org/2012/05/10/concept/en/CardiacVentricle_ApicalInferiorRegion",
                "@type": "Node",
                "label": "CardiacVentricle ApicalInferiorRegion",
                "path": "/2012/05/10/concept/en/CardiacVentricle_ApicalInferiorRegion",
                "site": "sw.opencyc.org",
                "site_available": false,
                "term": "http://sw.opencyc.org/2012/05/10/concept/en/CardiacVentricle_ApicalInferiorRegion"
            },
            "license": "cc:by/4.0",
            "rel": {
                "@id": "/r/ExternalURL",
                "@type": "Relation",
                "label": "ExternalURL"
            },
            "sources": [
                {
                    "@id": "/s/resource/opencyc/2012",
                    "@type": "Source",
                    "contributor": "/s/resource/opencyc/2012"
                }
            ],
            "start": {
                "@id": "/c/en/ai/n",
                "@type": "Node",
                "label": "ai",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/ai"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/en/ai/,/c/pt/ai/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/pt/ai",
                "@type": "Node",
                "label": "ai",
                "language": "pt",
                "term": "/c/pt/ai"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/ai",
                "@type": "Node",
                "label": "ai",
                "language": "en",
                "term": "/c/en/ai"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/en/ai/n/wikt/en_1/,/c/en/three_toed_sloth/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/three_toed_sloth",
                "@type": "Node",
                "label": "three toed sloth",
                "language": "en",
                "term": "/c/en/three_toed_sloth"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/ai/n/wikt/en_1",
                "@type": "Node",
                "label": "ai",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/ai"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/ro/al/,/c/en/ai/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/ai",
                "@type": "Node",
                "label": "ai",
                "language": "en",
                "term": "/c/en/ai"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/ro/al",
                "@type": "Node",
                "label": "al",
                "language": "ro",
                "term": "/c/ro/al"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/IsA/,/c/en/agi/n/,/c/en/ai/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/ai",
                "@type": "Node",
                "label": "ai",
                "language": "en",
                "term": "/c/en/ai"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/IsA",
                "@type": "Relation",
                "label": "IsA"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/agi/n",
                "@type": "Node",
                "label": "agi",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/agi"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/IsA/,/c/en/asi/n/,/c/en/ai/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/ai",
                "@type": "Node",
                "label": "ai",
                "language": "en",
                "term": "/c/en/ai"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/IsA",
                "@type": "Relation",
                "label": "IsA"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/asi/n",
                "@type": "Node",
                "label": "asi",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/asi"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/ExternalURL/,/c/en/ai/n/wp/singer/,/http://dbpedia.org/resource/Ai_(singer)/]",
            "@type": "Edge",
            "dataset": "/d/dbpedia/en",
            "end": {
                "@id": "http://dbpedia.org/resource/Ai_(singer)",
                "@type": "Node",
                "label": "Ai (singer)",
                "path": "/resource/Ai_(singer)",
                "site": "dbpedia.org",
                "site_available": true,
                "term": "http://dbpedia.org/resource/Ai_(singer)"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/ExternalURL",
                "@type": "Relation",
                "label": "ExternalURL"
            },
            "sources": [
                {
                    "@id": "/s/resource/dbpedia/2015/en",
                    "@type": "Source",
                    "contributor": "/s/resource/dbpedia/2015/en"
                }
            ],
            "start": {
                "@id": "/c/en/ai/n/wp/singer",
                "@type": "Node",
                "label": "ai",
                "language": "en",
                "sense_label": "n, singer",
                "term": "/c/en/ai"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/HasContext/,/c/en/ai/n/wikt/en_1/,/c/en/biblical/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/biblical",
                "@type": "Node",
                "label": "biblical",
                "language": "en",
                "term": "/c/en/biblical"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/HasContext",
                "@type": "Relation",
                "label": "HasContext"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/ai/n/wikt/en_1",
                "@type": "Node",
                "label": "ai",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/ai"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/CapableOf/,/c/en/ai/,/c/en/play_chess_against_human/]",
            "@type": "Edge",
            "dataset": "/d/conceptnet/4/en",
            "end": {
                "@id": "/c/en/play_chess_against_human",
                "@type": "Node",
                "label": "play chess against a human",
                "language": "en",
                "term": "/c/en/play_chess_against_human"
            },
            "license": "cc:by/4.0",
            "rel": {
                "@id": "/r/CapableOf",
                "@type": "Relation",
                "label": "CapableOf"
            },
            "sources": [
                {
                    "@id": "/and/[/s/activity/omcs/omcs1_possibly_free_text/,/s/contributor/omcs/chazryt/]",
                    "@type": "Source",
                    "activity": "/s/activity/omcs/omcs1_possibly_free_text",
                    "contributor": "/s/contributor/omcs/chazryt"
                }
            ],
            "start": {
                "@id": "/c/en/ai",
                "@type": "Node",
                "label": "An AI",
                "language": "en",
                "term": "/c/en/ai"
            },
            "surfaceText": "[[An AI]] can [[play chess against a human]]",
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/ExternalURL/,/c/en/ai/n/wp/poet/,/http://dbpedia.org/resource/Ai_(poet)/]",
            "@type": "Edge",
            "dataset": "/d/dbpedia/en",
            "end": {
                "@id": "http://dbpedia.org/resource/Ai_(poet)",
                "@type": "Node",
                "label": "Ai (poet)",
                "path": "/resource/Ai_(poet)",
                "site": "dbpedia.org",
                "site_available": true,
                "term": "http://dbpedia.org/resource/Ai_(poet)"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/ExternalURL",
                "@type": "Relation",
                "label": "ExternalURL"
            },
            "sources": [
                {
                    "@id": "/s/resource/dbpedia/2015/en",
                    "@type": "Source",
                    "contributor": "/s/resource/dbpedia/2015/en"
                }
            ],
            "start": {
                "@id": "/c/en/ai/n/wp/poet",
                "@type": "Node",
                "label": "ai",
                "language": "en",
                "sense_label": "n, poet",
                "term": "/c/en/ai"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/ro/l_ai/,/c/en/ai/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/ai",
                "@type": "Node",
                "label": "ai",
                "language": "en",
                "term": "/c/en/ai"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/ro/l_ai",
                "@type": "Node",
                "label": "l ai",
                "language": "ro",
                "term": "/c/ro/l_ai"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/HasContext/,/c/en/ai/n/,/c/en/british_airforce/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/british_airforce",
                "@type": "Node",
                "label": "british airforce",
                "language": "en",
                "term": "/c/en/british_airforce"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/HasContext",
                "@type": "Relation",
                "label": "HasContext"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/ai/n",
                "@type": "Node",
                "label": "ai",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/ai"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/HasContext/,/c/en/ai/,/c/en/us/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/us",
                "@type": "Node",
                "label": "us",
                "language": "en",
                "term": "/c/en/us"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/HasContext",
                "@type": "Relation",
                "label": "HasContext"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/ai",
                "@type": "Node",
                "label": "ai",
                "language": "en",
                "term": "/c/en/ai"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/HasContext/,/c/en/ai/n/,/c/en/management/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/management",
                "@type": "Node",
                "label": "management",
                "language": "en",
                "term": "/c/en/management"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/HasContext",
                "@type": "Relation",
                "label": "HasContext"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/ai/n",
                "@type": "Node",
                "label": "ai",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/ai"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/en/ayu/n/,/c/en/ai/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/ai",
                "@type": "Node",
                "label": "ai",
                "language": "en",
                "term": "/c/en/ai"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/ayu/n",
                "@type": "Node",
                "label": "ayu",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/ayu"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/pt/ia/n/,/c/en/ai/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/ai",
                "@type": "Node",
                "label": "ai",
                "language": "en",
                "term": "/c/en/ai"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/pt/ia/n",
                "@type": "Node",
                "label": "ia",
                "language": "pt",
                "sense_label": "n",
                "term": "/c/pt/ia"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/HasContext/,/c/en/gp/n/,/c/en/ai/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/ai",
                "@type": "Node",
                "label": "ai",
                "language": "en",
                "term": "/c/en/ai"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/HasContext",
                "@type": "Relation",
                "label": "HasContext"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/gp/n",
                "@type": "Node",
                "label": "gp",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/gp"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/ExternalURL/,/c/en/ai/n/wp/singer/,/http://wikidata.dbpedia.org/resource/Q403161/]",
            "@type": "Edge",
            "dataset": "/d/dbpedia/en",
            "end": {
                "@id": "http://wikidata.dbpedia.org/resource/Q403161",
                "@type": "Node",
                "label": "Q403161",
                "path": "/resource/Q403161",
                "site": "wikidata.dbpedia.org",
                "site_available": false,
                "term": "http://wikidata.dbpedia.org/resource/Q403161"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/ExternalURL",
                "@type": "Relation",
                "label": "ExternalURL"
            },
            "sources": [
                {
                    "@id": "/s/resource/dbpedia/2015/en",
                    "@type": "Source",
                    "contributor": "/s/resource/dbpedia/2015/en"
                }
            ],
            "start": {
                "@id": "/c/en/ai/n/wp/singer",
                "@type": "Node",
                "label": "ai",
                "language": "en",
                "sense_label": "n, singer",
                "term": "/c/en/ai"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/UsedFor/,/c/en/thinking/,/c/en/ai/]",
            "@type": "Edge",
            "dataset": "/d/conceptnet/4/en",
            "end": {
                "@id": "/c/en/ai",
                "@type": "Node",
                "label": "AI",
                "language": "en",
                "term": "/c/en/ai"
            },
            "license": "cc:by/4.0",
            "rel": {
                "@id": "/r/UsedFor",
                "@type": "Relation",
                "label": "UsedFor"
            },
            "sources": [
                {
                    "@id": "/and/[/s/activity/omcs/omcs1_possibly_free_text/,/s/contributor/omcs/shesse/]",
                    "@type": "Source",
                    "activity": "/s/activity/omcs/omcs1_possibly_free_text",
                    "contributor": "/s/contributor/omcs/shesse"
                }
            ],
            "start": {
                "@id": "/c/en/thinking",
                "@type": "Node",
                "label": "thinking",
                "language": "en",
                "term": "/c/en/thinking"
            },
            "surfaceText": "[[thinking]] is for [[AI]]",
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/IsA/,/c/en/ai/,/c/en/term/]",
            "@type": "Edge",
            "dataset": "/d/conceptnet/4/en",
            "end": {
                "@id": "/c/en/term",
                "@type": "Node",
                "label": "a term",
                "language": "en",
                "term": "/c/en/term"
            },
            "license": "cc:by/4.0",
            "rel": {
                "@id": "/r/IsA",
                "@type": "Relation",
                "label": "IsA"
            },
            "sources": [
                {
                    "@id": "/and/[/s/activity/omcs/omcs1_possibly_free_text/,/s/contributor/omcs/jackielang/]",
                    "@type": "Source",
                    "activity": "/s/activity/omcs/omcs1_possibly_free_text",
                    "contributor": "/s/contributor/omcs/jackielang"
                }
            ],
            "start": {
                "@id": "/c/en/ai",
                "@type": "Node",
                "label": "AI",
                "language": "en",
                "term": "/c/en/ai"
            },
            "surfaceText": "[[AI]] is [[a term]]",
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/HasContext/,/c/en/ai/n/,/c/en/computing_theory/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/computing_theory",
                "@type": "Node",
                "label": "computing theory",
                "language": "en",
                "term": "/c/en/computing_theory"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/HasContext",
                "@type": "Relation",
                "label": "HasContext"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/ai/n",
                "@type": "Node",
                "label": "ai",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/ai"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/fr/aï/n/,/c/en/ai/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/ai",
                "@type": "Node",
                "label": "ai",
                "language": "en",
                "term": "/c/en/ai"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/fr/aï/n",
                "@type": "Node",
                "label": "aï",
                "language": "fr",
                "sense_label": "n",
                "term": "/c/fr/aï"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/fr/intelligence_artificielle/n/,/c/en/ai/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/fr",
            "end": {
                "@id": "/c/en/ai",
                "@type": "Node",
                "label": "ai",
                "language": "en",
                "term": "/c/en/ai"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/fr/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/fr",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/fr/intelligence_artificielle/n",
                "@type": "Node",
                "label": "intelligence artificielle",
                "language": "fr",
                "sense_label": "n",
                "term": "/c/fr/intelligence_artificielle"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/en/ai/,/c/en/unau/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/unau",
                "@type": "Node",
                "label": "unau",
                "language": "en",
                "term": "/c/en/unau"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/ai",
                "@type": "Node",
                "label": "ai",
                "language": "en",
                "term": "/c/en/ai"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/zh/哀/,/c/en/ai/]",
            "@type": "Edge",
            "dataset": "/d/cc_cedict",
            "end": {
                "@id": "/c/en/ai",
                "@type": "Node",
                "label": "ai",
                "language": "en",
                "term": "/c/en/ai"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/cc_cedict/2017-10",
                    "@type": "Source",
                    "contributor": "/s/resource/cc_cedict/2017-10"
                }
            ],
            "start": {
                "@id": "/c/zh/哀",
                "@type": "Node",
                "label": "哀",
                "language": "zh",
                "term": "/c/zh/哀"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/en/ai/,/c/en/artificial_intelligence/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/de",
            "end": {
                "@id": "/c/en/artificial_intelligence",
                "@type": "Node",
                "label": "artificial intelligence",
                "language": "en",
                "term": "/c/en/artificial_intelligence"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/de/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/de",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/ai",
                "@type": "Node",
                "label": "ai",
                "language": "en",
                "term": "/c/en/ai"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/en/et_tell/n/,/c/en/ai/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/ai",
                "@type": "Node",
                "label": "ai",
                "language": "en",
                "term": "/c/en/ai"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/et_tell/n",
                "@type": "Node",
                "label": "et tell",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/et_tell"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/en/ai/,/c/en/all_right/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/all_right",
                "@type": "Node",
                "label": "all right",
                "language": "en",
                "term": "/c/en/all_right"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/ai",
                "@type": "Node",
                "label": "ai",
                "language": "en",
                "term": "/c/en/ai"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/CausesDesire/,/c/en/ai/,/c/en/discover_truth/]",
            "@type": "Edge",
            "dataset": "/d/conceptnet/4/en",
            "end": {
                "@id": "/c/en/discover_truth",
                "@type": "Node",
                "label": "discover the truth",
                "language": "en",
                "term": "/c/en/discover_truth"
            },
            "license": "cc:by/4.0",
            "rel": {
                "@id": "/r/CausesDesire",
                "@type": "Relation",
                "label": "CausesDesire"
            },
            "sources": [
                {
                    "@id": "/and/[/s/activity/omcs/omcs1_possibly_free_text/,/s/contributor/omcs/colm/]",
                    "@type": "Source",
                    "activity": "/s/activity/omcs/omcs1_possibly_free_text",
                    "contributor": "/s/contributor/omcs/colm"
                }
            ],
            "start": {
                "@id": "/c/en/ai",
                "@type": "Node",
                "label": "ai",
                "language": "en",
                "term": "/c/en/ai"
            },
            "surfaceText": "[[ai]] would make you want to [[discover the truth]]",
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/HasContext/,/c/en/ai/n/,/c/en/agriculture/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/agriculture",
                "@type": "Node",
                "label": "agriculture",
                "language": "en",
                "term": "/c/en/agriculture"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/HasContext",
                "@type": "Relation",
                "label": "HasContext"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/ai/n",
                "@type": "Node",
                "label": "ai",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/ai"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/HasContext/,/c/en/ai/n/,/c/en/nutrition/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/nutrition",
                "@type": "Node",
                "label": "nutrition",
                "language": "en",
                "term": "/c/en/nutrition"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/HasContext",
                "@type": "Relation",
                "label": "HasContext"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/ai/n",
                "@type": "Node",
                "label": "ai",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/ai"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/en/non_player_character/n/,/c/en/ai/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/ai",
                "@type": "Node",
                "label": "ai",
                "language": "en",
                "term": "/c/en/ai"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/non_player_character/n",
                "@type": "Node",
                "label": "non player character",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/non_player_character"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/en/ai/n/wikt/en_1/,/c/en/canaanite/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/canaanite",
                "@type": "Node",
                "label": "canaanite",
                "language": "en",
                "term": "/c/en/canaanite"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/ai/n/wikt/en_1",
                "@type": "Node",
                "label": "ai",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/ai"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/en/ai/n/,/c/ru/ии/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/ru/ии",
                "@type": "Node",
                "label": "ии",
                "language": "ru",
                "term": "/c/ru/ии"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/ai/n",
                "@type": "Node",
                "label": "ai",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/ai"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/en/ai/n/wikt/en_1/,/c/en/joshua/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/joshua",
                "@type": "Node",
                "label": "joshua",
                "language": "en",
                "term": "/c/en/joshua"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/ai/n/wikt/en_1",
                "@type": "Node",
                "label": "ai",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/ai"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/en/ai/n/,/c/pt/ia/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/pt/ia",
                "@type": "Node",
                "label": "ia",
                "language": "pt",
                "term": "/c/pt/ia"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/ai/n",
                "@type": "Node",
                "label": "ai",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/ai"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/en/ai/n/wikt/en_1/,/c/en/jeremiah/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/jeremiah",
                "@type": "Node",
                "label": "jeremiah",
                "language": "en",
                "term": "/c/en/jeremiah"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/ai/n/wikt/en_1",
                "@type": "Node",
                "label": "ai",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/ai"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/ja/ai/n/,/c/en/ai/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/ai",
                "@type": "Node",
                "label": "ai",
                "language": "en",
                "term": "/c/en/ai"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/ja/ai/n",
                "@type": "Node",
                "label": "ai",
                "language": "ja",
                "sense_label": "n",
                "term": "/c/ja/ai"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/en/artificial_intelligence/n/,/c/en/ai/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/ai",
                "@type": "Node",
                "label": "ai",
                "language": "en",
                "term": "/c/en/ai"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/artificial_intelligence/n",
                "@type": "Node",
                "label": "artificial intelligence",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/artificial_intelligence"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/en/ai/n/,/c/el/τν/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/el/τν",
                "@type": "Node",
                "label": "τν",
                "language": "el",
                "term": "/c/el/τν"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/ai/n",
                "@type": "Node",
                "label": "ai",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/ai"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/CapableOf/,/c/en/ai/,/c/en/learn_common_sense/]",
            "@type": "Edge",
            "dataset": "/d/conceptnet/4/en",
            "end": {
                "@id": "/c/en/learn_common_sense",
                "@type": "Node",
                "label": "learn common sense",
                "language": "en",
                "term": "/c/en/learn_common_sense"
            },
            "license": "cc:by/4.0",
            "rel": {
                "@id": "/r/CapableOf",
                "@type": "Relation",
                "label": "CapableOf"
            },
            "sources": [
                {
                    "@id": "/and/[/s/activity/omcs/omcs1_possibly_free_text/,/s/contributor/omcs/neuromancer/]",
                    "@type": "Source",
                    "activity": "/s/activity/omcs/omcs1_possibly_free_text",
                    "contributor": "/s/contributor/omcs/neuromancer"
                }
            ],
            "start": {
                "@id": "/c/en/ai",
                "@type": "Node",
                "label": "an AI",
                "language": "en",
                "term": "/c/en/ai"
            },
            "surfaceText": "[[an AI]] can [[learn common sense]]",
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/ExternalURL/,/c/en/ai/n/wp/poet/,/http://wikidata.dbpedia.org/resource/Q403146/]",
            "@type": "Edge",
            "dataset": "/d/dbpedia/en",
            "end": {
                "@id": "http://wikidata.dbpedia.org/resource/Q403146",
                "@type": "Node",
                "label": "Q403146",
                "path": "/resource/Q403146",
                "site": "wikidata.dbpedia.org",
                "site_available": false,
                "term": "http://wikidata.dbpedia.org/resource/Q403146"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/ExternalURL",
                "@type": "Relation",
                "label": "ExternalURL"
            },
            "sources": [
                {
                    "@id": "/s/resource/dbpedia/2015/en",
                    "@type": "Source",
                    "contributor": "/s/resource/dbpedia/2015/en"
                }
            ],
            "start": {
                "@id": "/c/en/ai/n/wp/poet",
                "@type": "Node",
                "label": "ai",
                "language": "en",
                "sense_label": "n, poet",
                "term": "/c/en/ai"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/fr/ia/n/,/c/en/ai/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/fr",
            "end": {
                "@id": "/c/en/ai",
                "@type": "Node",
                "label": "ai",
                "language": "en",
                "term": "/c/en/ai"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/fr/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/fr",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/fr/ia/n",
                "@type": "Node",
                "label": "ia",
                "language": "fr",
                "sense_label": "n",
                "term": "/c/fr/ia"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/HasContext/,/c/en/ai/n/wikt/fr_1/,/c/fr/intelligence_artificielle/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/fr",
            "end": {
                "@id": "/c/fr/intelligence_artificielle",
                "@type": "Node",
                "label": "intelligence artificielle",
                "language": "fr",
                "term": "/c/fr/intelligence_artificielle"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/HasContext",
                "@type": "Relation",
                "label": "HasContext"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/fr/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/fr",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/ai/n/wikt/fr_1",
                "@type": "Node",
                "label": "ai",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/ai"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/HasContext/,/c/en/ai/n/,/c/en/phonetics/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/phonetics",
                "@type": "Node",
                "label": "phonetics",
                "language": "en",
                "term": "/c/en/phonetics"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/HasContext",
                "@type": "Relation",
                "label": "HasContext"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/ai/n",
                "@type": "Node",
                "label": "ai",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/ai"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/en/ai/n/,/c/fr/ia/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/fr/ia",
                "@type": "Node",
                "label": "ia",
                "language": "fr",
                "term": "/c/fr/ia"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/ai/n",
                "@type": "Node",
                "label": "ai",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/ai"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/en/iui/,/c/en/ai/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/ai",
                "@type": "Node",
                "label": "ai",
                "language": "en",
                "term": "/c/en/ai"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/iui",
                "@type": "Node",
                "label": "iui",
                "language": "en",
                "term": "/c/en/iui"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/en/ai/n/,/c/de/ki/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/de/ki",
                "@type": "Node",
                "label": "ki",
                "language": "de",
                "term": "/c/de/ki"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/ai/n",
                "@type": "Node",
                "label": "ai",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/ai"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/en/ai/n/wikt/fr_1/,/c/fr/intelligence_artificielle/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/fr",
            "end": {
                "@id": "/c/fr/intelligence_artificielle",
                "@type": "Node",
                "label": "intelligence artificielle",
                "language": "fr",
                "term": "/c/fr/intelligence_artificielle"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/fr/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/fr",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/ai/n/wikt/fr_1",
                "@type": "Node",
                "label": "ai",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/ai"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/de/ki/,/c/en/ai/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/de",
            "end": {
                "@id": "/c/en/ai",
                "@type": "Node",
                "label": "ai",
                "language": "en",
                "term": "/c/en/ai"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/de/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/de",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/de/ki",
                "@type": "Node",
                "label": "ki",
                "language": "de",
                "term": "/c/de/ki"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/en/a/,/c/en/ai/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/ai",
                "@type": "Node",
                "label": "ai",
                "language": "en",
                "term": "/c/en/ai"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/a",
                "@type": "Node",
                "label": "a",
                "language": "en",
                "term": "/c/en/a"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/IsA/,/c/en/ai/n/,/c/en/semisolid/n/]",
            "@type": "Edge",
            "dataset": "/d/opencyc",
            "end": {
                "@id": "/c/en/semisolid/n",
                "@type": "Node",
                "label": "semisolid",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/semisolid"
            },
            "license": "cc:by/4.0",
            "rel": {
                "@id": "/r/IsA",
                "@type": "Relation",
                "label": "IsA"
            },
            "sources": [
                {
                    "@id": "/s/resource/opencyc/2012",
                    "@type": "Source",
                    "contributor": "/s/resource/opencyc/2012"
                }
            ],
            "start": {
                "@id": "/c/en/ai/n",
                "@type": "Node",
                "label": "ai",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/ai"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/en/ai/n/wikt/en_1/,/c/en/et_tell/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/et_tell",
                "@type": "Node",
                "label": "et tell",
                "language": "en",
                "term": "/c/en/et_tell"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/ai/n/wikt/en_1",
                "@type": "Node",
                "label": "ai",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/ai"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/de/ai/,/c/en/ai/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/de",
            "end": {
                "@id": "/c/en/ai",
                "@type": "Node",
                "label": "ai",
                "language": "en",
                "term": "/c/en/ai"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/de/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/de",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/de/ai",
                "@type": "Node",
                "label": "ai",
                "language": "de",
                "term": "/c/de/ai"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/HasContext/,/c/en/ai/,/c/en/slang/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/slang",
                "@type": "Node",
                "label": "slang",
                "language": "en",
                "term": "/c/en/slang"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/HasContext",
                "@type": "Relation",
                "label": "HasContext"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/ai",
                "@type": "Node",
                "label": "ai",
                "language": "en",
                "term": "/c/en/ai"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/EtymologicallyDerivedFrom/,/c/ja/ai/,/c/en/ai/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/ai",
                "@type": "Node",
                "label": "ai",
                "language": "en",
                "term": "/c/en/ai"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/EtymologicallyDerivedFrom",
                "@type": "Relation",
                "label": "EtymologicallyDerivedFrom"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/ja/ai",
                "@type": "Node",
                "label": "ai",
                "language": "ja",
                "term": "/c/ja/ai"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/HasContext/,/c/en/tri/n/,/c/en/ai/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/ai",
                "@type": "Node",
                "label": "ai",
                "language": "en",
                "term": "/c/en/ai"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/HasContext",
                "@type": "Relation",
                "label": "HasContext"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/tri/n",
                "@type": "Node",
                "label": "tri",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/tri"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/dbpedia/genre/,/c/en/ai/n/wp/singer/,/c/en/dance_music/]",
            "@type": "Edge",
            "dataset": "/d/dbpedia/en",
            "end": {
                "@id": "/c/en/dance_music",
                "@type": "Node",
                "label": "dance music",
                "language": "en",
                "term": "/c/en/dance_music"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/dbpedia/genre",
                "@type": "Relation",
                "label": "genre"
            },
            "sources": [
                {
                    "@id": "/s/resource/dbpedia/2015/en",
                    "@type": "Source",
                    "contributor": "/s/resource/dbpedia/2015/en"
                }
            ],
            "start": {
                "@id": "/c/en/ai/n/wp/singer",
                "@type": "Node",
                "label": "ai",
                "language": "en",
                "sense_label": "n, singer",
                "term": "/c/en/ai"
            },
            "surfaceText": null,
            "weight": 0.5
        },
        {
            "@id": "/a/[/r/Synonym/,/c/pl/ai/n/wp/poetka/,/c/en/ai/n/wp/poet/]",
            "@type": "Edge",
            "dataset": "/d/dbpedia/en",
            "end": {
                "@id": "/c/en/ai/n/wp/poet",
                "@type": "Node",
                "label": "ai",
                "language": "en",
                "sense_label": "n, poet",
                "term": "/c/en/ai"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/dbpedia/2015/en",
                    "@type": "Source",
                    "contributor": "/s/resource/dbpedia/2015/en"
                }
            ],
            "start": {
                "@id": "/c/pl/ai/n/wp/poetka",
                "@type": "Node",
                "label": "ai",
                "language": "pl",
                "sense_label": "n, poetka",
                "term": "/c/pl/ai"
            },
            "surfaceText": null,
            "weight": 0.5
        },
        {
            "@id": "/a/[/r/dbpedia/occupation/,/c/en/ai/n/wp/poet/,/c/en/poetry/]",
            "@type": "Edge",
            "dataset": "/d/dbpedia/en",
            "end": {
                "@id": "/c/en/poetry",
                "@type": "Node",
                "label": "poetry",
                "language": "en",
                "term": "/c/en/poetry"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/dbpedia/occupation",
                "@type": "Relation",
                "label": "occupation"
            },
            "sources": [
                {
                    "@id": "/s/resource/dbpedia/2015/en",
                    "@type": "Source",
                    "contributor": "/s/resource/dbpedia/2015/en"
                }
            ],
            "start": {
                "@id": "/c/en/ai/n/wp/poet",
                "@type": "Node",
                "label": "ai",
                "language": "en",
                "sense_label": "n, poet",
                "term": "/c/en/ai"
            },
            "surfaceText": null,
            "weight": 0.5
        },
        {
            "@id": "/a/[/r/IsA/,/c/en/ai/n/wp/singer/,/c/en/musical_artist/n/]",
            "@type": "Edge",
            "dataset": "/d/dbpedia/en",
            "end": {
                "@id": "/c/en/musical_artist/n",
                "@type": "Node",
                "label": "musical artist",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/musical_artist"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/IsA",
                "@type": "Relation",
                "label": "IsA"
            },
            "sources": [
                {
                    "@id": "/s/resource/dbpedia/2015/en",
                    "@type": "Source",
                    "contributor": "/s/resource/dbpedia/2015/en"
                }
            ],
            "start": {
                "@id": "/c/en/ai/n/wp/singer",
                "@type": "Node",
                "label": "ai",
                "language": "en",
                "sense_label": "n, singer",
                "term": "/c/en/ai"
            },
            "surfaceText": null,
            "weight": 0.5
        },
        {
            "@id": "/a/[/r/Synonym/,/c/ko/ai/n/wp/가수/,/c/en/ai/n/wp/singer/]",
            "@type": "Edge",
            "dataset": "/d/dbpedia/en",
            "end": {
                "@id": "/c/en/ai/n/wp/singer",
                "@type": "Node",
                "label": "ai",
                "language": "en",
                "sense_label": "n, singer",
                "term": "/c/en/ai"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/dbpedia/2015/en",
                    "@type": "Source",
                    "contributor": "/s/resource/dbpedia/2015/en"
                }
            ],
            "start": {
                "@id": "/c/ko/ai/n/wp/가수",
                "@type": "Node",
                "label": "ai",
                "language": "ko",
                "sense_label": "n, 가수",
                "term": "/c/ko/ai"
            },
            "surfaceText": null,
            "weight": 0.5
        },
        {
            "@id": "/a/[/r/Synonym/,/c/zh/ai/n/wp/歌手/,/c/en/ai/n/wp/singer/]",
            "@type": "Edge",
            "dataset": "/d/dbpedia/en",
            "end": {
                "@id": "/c/en/ai/n/wp/singer",
                "@type": "Node",
                "label": "ai",
                "language": "en",
                "sense_label": "n, singer",
                "term": "/c/en/ai"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/dbpedia/2015/en",
                    "@type": "Source",
                    "contributor": "/s/resource/dbpedia/2015/en"
                }
            ],
            "start": {
                "@id": "/c/zh/ai/n/wp/歌手",
                "@type": "Node",
                "label": "ai",
                "language": "zh",
                "sense_label": "n, 歌手",
                "term": "/c/zh/ai"
            },
            "surfaceText": null,
            "weight": 0.5
        },
        {
            "@id": "/a/[/r/Synonym/,/c/fr/ai/n/wp/chanteuse/,/c/en/ai/n/wp/singer/]",
            "@type": "Edge",
            "dataset": "/d/dbpedia/en",
            "end": {
                "@id": "/c/en/ai/n/wp/singer",
                "@type": "Node",
                "label": "ai",
                "language": "en",
                "sense_label": "n, singer",
                "term": "/c/en/ai"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/dbpedia/2015/en",
                    "@type": "Source",
                    "contributor": "/s/resource/dbpedia/2015/en"
                }
            ],
            "start": {
                "@id": "/c/fr/ai/n/wp/chanteuse",
                "@type": "Node",
                "label": "ai",
                "language": "fr",
                "sense_label": "n, chanteuse",
                "term": "/c/fr/ai"
            },
            "surfaceText": null,
            "weight": 0.5
        },
        {
            "@id": "/a/[/r/Synonym/,/c/hu/ai/n/wp/énekes/,/c/en/ai/n/wp/singer/]",
            "@type": "Edge",
            "dataset": "/d/dbpedia/en",
            "end": {
                "@id": "/c/en/ai/n/wp/singer",
                "@type": "Node",
                "label": "ai",
                "language": "en",
                "sense_label": "n, singer",
                "term": "/c/en/ai"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/dbpedia/2015/en",
                    "@type": "Source",
                    "contributor": "/s/resource/dbpedia/2015/en"
                }
            ],
            "start": {
                "@id": "/c/hu/ai/n/wp/énekes",
                "@type": "Node",
                "label": "ai",
                "language": "hu",
                "sense_label": "n, énekes",
                "term": "/c/hu/ai"
            },
            "surfaceText": null,
            "weight": 0.5
        },
        {
            "@id": "/a/[/r/Synonym/,/c/de/ai/n/wp/sängerin/,/c/en/ai/n/wp/singer/]",
            "@type": "Edge",
            "dataset": "/d/dbpedia/en",
            "end": {
                "@id": "/c/en/ai/n/wp/singer",
                "@type": "Node",
                "label": "ai",
                "language": "en",
                "sense_label": "n, singer",
                "term": "/c/en/ai"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/dbpedia/2015/en",
                    "@type": "Source",
                    "contributor": "/s/resource/dbpedia/2015/en"
                }
            ],
            "start": {
                "@id": "/c/de/ai/n/wp/sängerin",
                "@type": "Node",
                "label": "ai",
                "language": "de",
                "sense_label": "n, sängerin",
                "term": "/c/de/ai"
            },
            "surfaceText": null,
            "weight": 0.5
        },
        {
            "@id": "/a/[/r/Synonym/,/c/en/ai/n/wp/poet/,/c/en/ai/n/wp/poet/]",
            "@type": "Edge",
            "dataset": "/d/dbpedia/en",
            "end": {
                "@id": "/c/en/ai/n/wp/poet",
                "@type": "Node",
                "label": "ai",
                "language": "en",
                "sense_label": "n, poet",
                "term": "/c/en/ai"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/dbpedia/2015/en",
                    "@type": "Source",
                    "contributor": "/s/resource/dbpedia/2015/en"
                }
            ],
            "start": {
                "@id": "/c/en/ai/n/wp/poet",
                "@type": "Node",
                "label": "ai",
                "language": "en",
                "sense_label": "n, poet",
                "term": "/c/en/ai"
            },
            "surfaceText": null,
            "weight": 0.5
        },
        {
            "@id": "/a/[/r/IsA/,/c/en/ai/n/wp/poet/,/c/en/writer/n/]",
            "@type": "Edge",
            "dataset": "/d/dbpedia/en",
            "end": {
                "@id": "/c/en/writer/n",
                "@type": "Node",
                "label": "writer",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/writer"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/IsA",
                "@type": "Relation",
                "label": "IsA"
            },
            "sources": [
                {
                    "@id": "/s/resource/dbpedia/2015/en",
                    "@type": "Source",
                    "contributor": "/s/resource/dbpedia/2015/en"
                }
            ],
            "start": {
                "@id": "/c/en/ai/n/wp/poet",
                "@type": "Node",
                "label": "ai",
                "language": "en",
                "sense_label": "n, poet",
                "term": "/c/en/ai"
            },
            "surfaceText": null,
            "weight": 0.5
        },
        {
            "@id": "/a/[/r/dbpedia/genre/,/c/en/ai/n/wp/singer/,/c/en/contemporary_r_b/]",
            "@type": "Edge",
            "dataset": "/d/dbpedia/en",
            "end": {
                "@id": "/c/en/contemporary_r_b",
                "@type": "Node",
                "label": "contemporary r b",
                "language": "en",
                "term": "/c/en/contemporary_r_b"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/dbpedia/genre",
                "@type": "Relation",
                "label": "genre"
            },
            "sources": [
                {
                    "@id": "/s/resource/dbpedia/2015/en",
                    "@type": "Source",
                    "contributor": "/s/resource/dbpedia/2015/en"
                }
            ],
            "start": {
                "@id": "/c/en/ai/n/wp/singer",
                "@type": "Node",
                "label": "ai",
                "language": "en",
                "sense_label": "n, singer",
                "term": "/c/en/ai"
            },
            "surfaceText": null,
            "weight": 0.5
        },
        {
            "@id": "/a/[/r/Synonym/,/c/id/ai/n/wp/penyanyi/,/c/en/ai/n/wp/singer/]",
            "@type": "Edge",
            "dataset": "/d/dbpedia/en",
            "end": {
                "@id": "/c/en/ai/n/wp/singer",
                "@type": "Node",
                "label": "ai",
                "language": "en",
                "sense_label": "n, singer",
                "term": "/c/en/ai"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/dbpedia/2015/en",
                    "@type": "Source",
                    "contributor": "/s/resource/dbpedia/2015/en"
                }
            ],
            "start": {
                "@id": "/c/id/ai/n/wp/penyanyi",
                "@type": "Node",
                "label": "ai",
                "language": "id",
                "sense_label": "n, penyanyi",
                "term": "/c/id/ai"
            },
            "surfaceText": null,
            "weight": 0.5
        },
        {
            "@id": "/a/[/r/Synonym/,/c/fi/ai/n/wp/runoilija/,/c/en/ai/n/wp/poet/]",
            "@type": "Edge",
            "dataset": "/d/dbpedia/en",
            "end": {
                "@id": "/c/en/ai/n/wp/poet",
                "@type": "Node",
                "label": "ai",
                "language": "en",
                "sense_label": "n, poet",
                "term": "/c/en/ai"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/dbpedia/2015/en",
                    "@type": "Source",
                    "contributor": "/s/resource/dbpedia/2015/en"
                }
            ],
            "start": {
                "@id": "/c/fi/ai/n/wp/runoilija",
                "@type": "Node",
                "label": "ai",
                "language": "fi",
                "sense_label": "n, runoilija",
                "term": "/c/fi/ai"
            },
            "surfaceText": null,
            "weight": 0.5
        },
        {
            "@id": "/a/[/r/Synonym/,/c/it/ai/n/wp/cantante/,/c/en/ai/n/wp/singer/]",
            "@type": "Edge",
            "dataset": "/d/dbpedia/en",
            "end": {
                "@id": "/c/en/ai/n/wp/singer",
                "@type": "Node",
                "label": "ai",
                "language": "en",
                "sense_label": "n, singer",
                "term": "/c/en/ai"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/dbpedia/2015/en",
                    "@type": "Source",
                    "contributor": "/s/resource/dbpedia/2015/en"
                }
            ],
            "start": {
                "@id": "/c/it/ai/n/wp/cantante",
                "@type": "Node",
                "label": "ai",
                "language": "it",
                "sense_label": "n, cantante",
                "term": "/c/it/ai"
            },
            "surfaceText": null,
            "weight": 0.5
        },
        {
            "@id": "/a/[/r/Synonym/,/c/en/ai/n/wp/singer/,/c/en/ai/n/wp/singer/]",
            "@type": "Edge",
            "dataset": "/d/dbpedia/en",
            "end": {
                "@id": "/c/en/ai/n/wp/singer",
                "@type": "Node",
                "label": "ai",
                "language": "en",
                "sense_label": "n, singer",
                "term": "/c/en/ai"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/dbpedia/2015/en",
                    "@type": "Source",
                    "contributor": "/s/resource/dbpedia/2015/en"
                }
            ],
            "start": {
                "@id": "/c/en/ai/n/wp/singer",
                "@type": "Node",
                "label": "ai",
                "language": "en",
                "sense_label": "n, singer",
                "term": "/c/en/ai"
            },
            "surfaceText": null,
            "weight": 0.5
        },
        {
            "@id": "/a/[/r/dbpedia/genre/,/c/en/ai/n/wp/singer/,/c/en/pop_music/]",
            "@type": "Edge",
            "dataset": "/d/dbpedia/en",
            "end": {
                "@id": "/c/en/pop_music",
                "@type": "Node",
                "label": "pop music",
                "language": "en",
                "term": "/c/en/pop_music"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/dbpedia/genre",
                "@type": "Relation",
                "label": "genre"
            },
            "sources": [
                {
                    "@id": "/s/resource/dbpedia/2015/en",
                    "@type": "Source",
                    "contributor": "/s/resource/dbpedia/2015/en"
                }
            ],
            "start": {
                "@id": "/c/en/ai/n/wp/singer",
                "@type": "Node",
                "label": "ai",
                "language": "en",
                "sense_label": "n, singer",
                "term": "/c/en/ai"
            },
            "surfaceText": null,
            "weight": 0.5
        },
        {
            "@id": "/a/[/r/Synonym/,/c/ja/ai/n/wp/歌手/,/c/en/ai/n/wp/singer/]",
            "@type": "Edge",
            "dataset": "/d/dbpedia/en",
            "end": {
                "@id": "/c/en/ai/n/wp/singer",
                "@type": "Node",
                "label": "ai",
                "language": "en",
                "sense_label": "n, singer",
                "term": "/c/en/ai"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/dbpedia/2015/en",
                    "@type": "Source",
                    "contributor": "/s/resource/dbpedia/2015/en"
                }
            ],
            "start": {
                "@id": "/c/ja/ai/n/wp/歌手",
                "@type": "Node",
                "label": "ai",
                "language": "ja",
                "sense_label": "n, 歌手",
                "term": "/c/ja/ai"
            },
            "surfaceText": null,
            "weight": 0.5
        },
        {
            "@id": "/a/[/r/Synonym/,/c/de/ai/n/wp/dichterin/,/c/en/ai/n/wp/poet/]",
            "@type": "Edge",
            "dataset": "/d/dbpedia/en",
            "end": {
                "@id": "/c/en/ai/n/wp/poet",
                "@type": "Node",
                "label": "ai",
                "language": "en",
                "sense_label": "n, poet",
                "term": "/c/en/ai"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/dbpedia/2015/en",
                    "@type": "Source",
                    "contributor": "/s/resource/dbpedia/2015/en"
                }
            ],
            "start": {
                "@id": "/c/de/ai/n/wp/dichterin",
                "@type": "Node",
                "label": "ai",
                "language": "de",
                "sense_label": "n, dichterin",
                "term": "/c/de/ai"
            },
            "surfaceText": null,
            "weight": 0.5
        },
        {
            "@id": "/a/[/r/dbpedia/genre/,/c/en/ai/n/wp/singer/,/c/en/hip_hop_music/]",
            "@type": "Edge",
            "dataset": "/d/dbpedia/en",
            "end": {
                "@id": "/c/en/hip_hop_music",
                "@type": "Node",
                "label": "hip hop music",
                "language": "en",
                "term": "/c/en/hip_hop_music"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/dbpedia/genre",
                "@type": "Relation",
                "label": "genre"
            },
            "sources": [
                {
                    "@id": "/s/resource/dbpedia/2015/en",
                    "@type": "Source",
                    "contributor": "/s/resource/dbpedia/2015/en"
                }
            ],
            "start": {
                "@id": "/c/en/ai/n/wp/singer",
                "@type": "Node",
                "label": "ai",
                "language": "en",
                "sense_label": "n, singer",
                "term": "/c/en/ai"
            },
            "surfaceText": null,
            "weight": 0.5
        },
        {
            "@id": "/a/[/r/Synonym/,/c/pt/ai/n/wp/cantora/,/c/en/ai/n/wp/singer/]",
            "@type": "Edge",
            "dataset": "/d/dbpedia/en",
            "end": {
                "@id": "/c/en/ai/n/wp/singer",
                "@type": "Node",
                "label": "ai",
                "language": "en",
                "sense_label": "n, singer",
                "term": "/c/en/ai"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/dbpedia/2015/en",
                    "@type": "Source",
                    "contributor": "/s/resource/dbpedia/2015/en"
                }
            ],
            "start": {
                "@id": "/c/pt/ai/n/wp/cantora",
                "@type": "Node",
                "label": "ai",
                "language": "pt",
                "sense_label": "n, cantora",
                "term": "/c/pt/ai"
            },
            "surfaceText": null,
            "weight": 0.5
        },
        {
            "@id": "/a/[/r/EtymologicallyRelatedTo/,/c/en/ai/,/c/ja/あい/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/ja/あい",
                "@type": "Node",
                "label": "あい",
                "language": "ja",
                "term": "/c/ja/あい"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/EtymologicallyRelatedTo",
                "@type": "Relation",
                "label": "EtymologicallyRelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/ai",
                "@type": "Node",
                "label": "ai",
                "language": "en",
                "term": "/c/en/ai"
            },
            "surfaceText": null,
            "weight": 0.25
        },
        {
            "@id": "/a/[/r/ExternalURL/,/c/en/ai/,/http://en.wiktionary.org/wiki/AI/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "http://en.wiktionary.org/wiki/AI",
                "@type": "Node",
                "label": "AI",
                "path": "/wiki/AI",
                "site": "en.wiktionary.org",
                "site_available": true,
                "term": "http://en.wiktionary.org/wiki/AI"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/ExternalURL",
                "@type": "Relation",
                "label": "ExternalURL"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/ai",
                "@type": "Node",
                "label": "ai",
                "language": "en",
                "term": "/c/en/ai"
            },
            "surfaceText": null,
            "weight": 0.25
        },
        {
            "@id": "/a/[/r/ExternalURL/,/c/en/ai/,/http://fr.wiktionary.org/wiki/AI/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/fr",
            "end": {
                "@id": "http://fr.wiktionary.org/wiki/AI",
                "@type": "Node",
                "label": "AI",
                "path": "/wiki/AI",
                "site": "fr.wiktionary.org",
                "site_available": true,
                "term": "http://fr.wiktionary.org/wiki/AI"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/ExternalURL",
                "@type": "Relation",
                "label": "ExternalURL"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/fr/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/fr",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/ai",
                "@type": "Node",
                "label": "ai",
                "language": "en",
                "term": "/c/en/ai"
            },
            "surfaceText": null,
            "weight": 0.25
        },
        {
            "@id": "/a/[/r/EtymologicallyRelatedTo/,/c/en/ai/,/c/en/aight/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/aight",
                "@type": "Node",
                "label": "aight",
                "language": "en",
                "term": "/c/en/aight"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/EtymologicallyRelatedTo",
                "@type": "Relation",
                "label": "EtymologicallyRelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/ai",
                "@type": "Node",
                "label": "ai",
                "language": "en",
                "term": "/c/en/ai"
            },
            "surfaceText": null,
            "weight": 0.25
        },
        {
            "@id": "/a/[/r/ExternalURL/,/c/en/ai/,/http://en.wiktionary.org/wiki/Ai/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "http://en.wiktionary.org/wiki/Ai",
                "@type": "Node",
                "label": "Ai",
                "path": "/wiki/Ai",
                "site": "en.wiktionary.org",
                "site_available": true,
                "term": "http://en.wiktionary.org/wiki/Ai"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/ExternalURL",
                "@type": "Relation",
                "label": "ExternalURL"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/ai",
                "@type": "Node",
                "label": "ai",
                "language": "en",
                "term": "/c/en/ai"
            },
            "surfaceText": null,
            "weight": 0.25
        },
        {
            "@id": "/a/[/r/ExternalURL/,/c/en/ai/,/http://en.wiktionary.org/wiki/ai/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "http://en.wiktionary.org/wiki/ai",
                "@type": "Node",
                "label": "ai",
                "path": "/wiki/ai",
                "site": "en.wiktionary.org",
                "site_available": true,
                "term": "http://en.wiktionary.org/wiki/ai"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/ExternalURL",
                "@type": "Relation",
                "label": "ExternalURL"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/ai",
                "@type": "Node",
                "label": "ai",
                "language": "en",
                "term": "/c/en/ai"
            },
            "surfaceText": null,
            "weight": 0.25
        }
    ],
    "version": "5.8.1"
};
