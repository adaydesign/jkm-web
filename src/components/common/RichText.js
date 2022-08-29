import React, { useCallback, useMemo } from 'react'
// import isHotkey from 'is-hotkey'
import { Editable, withReact, useSlate, Slate } from 'slate-react'
import {
    Editor,
    Transforms,
    createEditor,
    Element as SlateElement,
} from 'slate'
import { withHistory } from 'slate-history'

import { Button, Toolbar } from '../common'
import {
    BsTypeBold, BsTypeItalic, BsTypeUnderline, BsCode,
    BsTypeH1, BsTypeH2, BsTypeH3, BsChatSquareQuote, BsListOl, BsListUl, BsJustifyLeft,
    BsTextCenter, BsJustifyRight, BsJustify, BsChatQuote, BsPencilSquare, BsExclamationSquare,
    BsTypeStrikethrough, BsPenFill, BsParagraph, BsPencil
} from "react-icons/bs";
import { Flex, Heading, Icon, Code, Alert, Collapse, Text, Link } from '@chakra-ui/react'
import { sectionId, linkEditId } from '../../utils/link-utils'
import { Link as ReactLink } from "react-router-dom";

// const HOTKEYS = {
//     'mod+b': 'bold',
//     'mod+i': 'italic',
//     'mod+u': 'underline',
//     'mod+`': 'code',
// }

const LIST_TYPES = ['numbered-list', 'bulleted-list']
const TEXT_ALIGN_TYPES = ['left', 'center', 'right', 'justify']
const defaultContent = [
    {
        type: 'paragraph',
        children: [
            { text: '' },
        ],
    },
]

const RichText = ({ id, content = defaultContent, readOnly = false }) => {
    const renderElement = useCallback(props => <Element readOnly={readOnly} id={id} {...props} />, [readOnly, id])
    const renderLeaf = useCallback(props => <Leaf {...props} />, [])
    const editor = useMemo(() => withHistory(withReact(createEditor())), [])

    return (
        <Slate editor={editor} value={content}>
            <Collapse in={!readOnly} animateOpacity>
                <Toolbar>
                    <MarkButton format="bold" icon={BsTypeBold} />
                    <MarkButton format="italic" icon={BsTypeItalic} />
                    <MarkButton format="underline" icon={BsTypeUnderline} />
                    <MarkButton format="delete" icon={BsTypeStrikethrough} />
                    <MarkButton format="highlight" icon={BsPenFill} />
                    <MarkButton format="code" icon={BsCode} />
                    <BlockButton format="heading-one" icon={BsTypeH1} />
                    <BlockButton format="heading-two" icon={BsTypeH2} />
                    <BlockButton format="heading-three" icon={BsTypeH3} />
                    <BlockButton format="block-quote" icon={BsChatSquareQuote} />
                    <BlockButton format="block-quote-mask" icon={BsExclamationSquare} />
                    <BlockButton format="block-quote-revise" icon={BsPencilSquare} />
                    <BlockButton format="numbered-list" icon={BsListOl} />
                    <BlockButton format="bulleted-list" icon={BsListUl} />
                    <BlockButton format="left" icon={BsJustifyLeft} />
                    <BlockButton format="center" icon={BsTextCenter} />
                    <BlockButton format="right" icon={BsJustifyRight} />
                    <BlockButton format="justify" icon={BsJustify} />
                    <BlockButton format="indent" icon={BsParagraph} />
                </Toolbar>
            </Collapse>
            <Editable
                renderElement={renderElement}
                renderLeaf={renderLeaf}
                placeholder="พิมพ์เนื้อหา"
                spellCheck
                autoFocus
                readOnly={readOnly}
                onKeyDown={event => {
                    // for (const hotkey in HOTKEYS) {
                    //     if (isHotkey(hotkey, event)) {
                    //         event.preventDefault()
                    //         const mark = HOTKEYS[hotkey]
                    //         toggleMark(editor, mark)
                    //     }
                    // }
                    console.log(JSON.stringify(Object.entries(editor)))
                }}
            />
        </Slate>
    )
}

const toggleBlock = (editor, format) => {
    const isActive = isBlockActive(
        editor,
        format,
        TEXT_ALIGN_TYPES.includes(format) ? 'align' : 'type'
    )
    const isList = LIST_TYPES.includes(format)

    Transforms.unwrapNodes(editor, {
        match: n =>
            !Editor.isEditor(n) &&
            SlateElement.isElement(n) &&
            LIST_TYPES.includes(n.type) &&
            !TEXT_ALIGN_TYPES.includes(format),
        split: true,
    })
    let newProperties = {}
    if (TEXT_ALIGN_TYPES.includes(format)) {
        newProperties = {
            align: isActive ? undefined : format,
        }
    } else {
        newProperties = {
            type: isActive ? 'paragraph' : isList ? 'list-item' : format,
        }
    }
    Transforms.setNodes(editor, newProperties)

    if (!isActive && isList) {
        const block = { type: format, children: [] }
        Transforms.wrapNodes(editor, block)
    }
}

const toggleMark = (editor, format) => {
    const isActive = isMarkActive(editor, format)

    if (isActive) {
        Editor.removeMark(editor, format)
    } else {
        Editor.addMark(editor, format, true)
    }
}

const isBlockActive = (editor, format, blockType = 'type') => {
    const { selection } = editor
    if (!selection) return false

    const [match] = Array.from(
        Editor.nodes(editor, {
            at: Editor.unhangRange(editor, selection),
            match: n =>
                !Editor.isEditor(n) &&
                SlateElement.isElement(n) &&
                n[blockType] === format,
        })
    )

    return !!match
}

const isMarkActive = (editor, format) => {
    const marks = Editor.marks(editor)
    return marks ? marks[format] === true : false
}

const Element = ({ attributes, children, element, readOnly, id }) => {
    const style = { textAlign: element.align }
    // console.log(element)
    switch (element.type) {
        case 'block-quote':
            return (
                <Flex w="full" px={10} my={4}>
                    <Alert status='info' style={style} {...attributes}>
                        <Icon as={BsChatQuote} color="blue.600" boxSize={10} mr={4} />
                        {children}
                    </Alert>
                </Flex>
            )
        case 'block-quote-mask':
            return (
                <Flex w="full" px={10} my={4}>
                    <Alert status='error' style={style} {...attributes}>
                        <Icon as={BsExclamationSquare} color="red.600" boxSize={10} mr={4} />
                        {children}
                    </Alert>
                </Flex>
            )
        case 'block-quote-revise':
            return (
                <Flex w="full" px={10} my={4}>
                    <Alert status='warning' style={style} {...attributes}>
                        <Icon as={BsPencilSquare} color="orange.600" boxSize={10} mr={4} />
                        {children}
                    </Alert>
                </Flex>
            )
        case 'bulleted-list':
            return (
                <ul style={style} {...attributes}>
                    {children}
                </ul>
            )
        case 'heading-one':
            return (
                <Flex direction="column" mb={2}>
                    <Flex align="baseline">
                        <Heading as='h1' size="md" mb={2} style={style} {...attributes}  >
                            <section id={`${sectionId(element.children[0].text)}`}>
                                {children}
                            </section>
                        </Heading>
                        <Collapse in={readOnly && id > 0} animateOpacity>
                            <Link as={ReactLink} to={`${linkEditId(id)}#${sectionId(element.children[0].text)}`}>
                                <Text fontSize="sm"><Icon as={BsPencil} mr={1} ml={2} />แก้ไข</Text>
                            </Link>
                        </Collapse>
                    </Flex>
                    <hr />
                </Flex>
            )
        case 'heading-two':
            return (
                <Heading as='h2' size="sm" mb={2} style={style} {...attributes}>
                    <section id={`${sectionId(element.children[0].text)}`}>
                        {children}
                    </section>
                </Heading>
            )
        case 'heading-three':
            return (
                <Heading as='h3' size="sm" mb={1} style={style} {...attributes}>
                    <section id={`${sectionId(element.children[0].text)}`}>
                        {children}
                    </section>
                </Heading>
            )
        case 'list-item':
            return (
                <li style={style} {...attributes}>
                    {children}
                </li>
            )
        case 'numbered-list':
            return (
                <ol style={style} {...attributes}>
                    {children}
                </ol>
            )
        case 'indent':
            return (
                <p style={{ ...style, textIndent: '40px' }} {...attributes}>
                    {children}
                </p>
            )
        default:
            return (
                <p style={style} {...attributes}>
                    {children}
                </p>
            )
    }
}

const Leaf = ({ attributes, children, leaf }) => {
    if (leaf.bold) {
        children = <strong>{children}</strong>
    }

    if (leaf.code) {
        children = <Code>{children}</Code>
    }

    if (leaf.italic) {
        children = <em>{children}</em>
    }

    if (leaf.underline) {
        children = <u>{children}</u>
    }

    if (leaf.delete) {
        children = <s>{children}</s>
    }

    if (leaf.highlight) {
        children = <mark>{children}</mark>
    }

    return <span {...attributes}>{children}</span>
}

const BlockButton = ({ format, icon }) => {
    const editor = useSlate()
    return (
        <Button
            active={isBlockActive(
                editor,
                format,
                TEXT_ALIGN_TYPES.includes(format) ? 'align' : 'type'
            )}
            onMouseDown={event => {
                event.preventDefault()
                toggleBlock(editor, format)
            }}
        >
            <Icon as={icon} />
        </Button>
    )
}

const MarkButton = ({ format, icon }) => {
    const editor = useSlate()
    return (
        <Button
            active={isMarkActive(editor, format)}
            onMouseDown={event => {
                event.preventDefault()
                toggleMark(editor, format)
            }}
        >
            <Icon as={icon} />
        </Button>
    )
}


export default RichText